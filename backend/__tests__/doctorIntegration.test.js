'use strict';

const { Sequelize } = require('sequelize');
const { beforeAll, afterAll, describe, it, expect } = require('@jest/globals');
const doctorsModel = require('../models/Doctors');

let sequelize;
let doctors;

beforeAll(async () => {
    sequelize = new Sequelize('sqlite::memory:', { logging: false });
    doctors = doctorsModel(sequelize);

    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('doctors Model - Integration Tests', () => {
    it('should create a doctor', async () => {
        try {
            const doctor = await doctors.create({
                name: 'Dr. John Doe',
                specialisation: 'Cardiology',
                email: 'john.doe@example.com',
                phone: '123-456-7890',
                address: '123 Main St, Anytown, USA',
                password: 'securepassword',
            });

            expect(doctor).toBeDefined();
            expect(doctor.name).toBe('Dr. John Doe');
            expect(doctor.specialisation).toBe('Cardiology');
            expect(doctor.email).toBe('john.doe@example.com');
            expect(doctor.phone).toBe('123-456-7890');
            expect(doctor.address).toBe('123 Main St, Anytown, USA');
        } catch (error) {
            console.error('Error creating doctor:', error);
            throw error;
        }
    });

    it('should not create a doctor with an invalid email', async () => {
        await expect(
            doctors.create({
                name: 'Dr. Jane Doe',
                specialisation: 'Neurology',
                email: 'invalidemail',
                phone: '123-456-7890',
                address: '456 Elm St, Anytown, USA',
                password: 'securepassword',
            })
        ).rejects.toThrow();
    });

    it('should read a doctor', async () => {
        await doctors.create({
            name: 'Dr. John Doe',
            specialisation: 'Cardiology',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            address: '123 Main St, Anytown, USA',
            password: 'securepassword',
        });

        const foundDoctor = await doctors.findOne({ where: { email: 'john.doe@example.com' } });
        expect(foundDoctor).toBeDefined();
        expect(foundDoctor.name).toBe('Dr. John Doe');
    });

    it('should update a doctor', async () => {
        const doctor = await doctors.create({
            name: 'Dr. John Doe',
            specialisation: 'Cardiology',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            address: '123 Main St, Anytown, USA',
            password: 'securepassword',
        });

        doctor.name = 'Dr. John A. Doe';
        await doctor.save();

        const updatedDoctor = await doctors.findOne({ where: { email: 'john.doe@example.com' } });
        expect(updatedDoctor.name).toBe('Dr. John A. Doe');
    });

    it('should delete a doctor', async () => {
        const doctor = await doctors.create({
            name: 'Dr. John Doe',
            specialisation: 'Cardiology',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            address: '123 Main St, Anytown, USA',
            password: 'securepassword',
        });

        await doctors.destroy({ where: { email: doctor.email } });

        const deletedDoctor = await doctors.findOne({ where: { email: 'john.doe@example.com' } });
        expect(deletedDoctor).toBeNull();
    });
});
