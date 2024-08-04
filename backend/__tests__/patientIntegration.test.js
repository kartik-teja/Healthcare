'use strict';

const { Sequelize } = require('sequelize');
const { beforeAll, afterAll, describe, it, expect } = require('@jest/globals');
const PatientsModel = require('../models/Patients');

let sequelize;
let Patients;

beforeAll(async () => {
    sequelize = new Sequelize('sqlite::memory:', { logging: false });
    Patients = PatientsModel(sequelize);

    await sequelize.sync();
});

afterAll(async () => {
    await sequelize.close();
});

describe('Patients Model - Integration Tests', () => {
    it('should create a patient', async () => {
        const patient = await Patients.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        expect(patient).toBeDefined();
        expect(patient.name).toBe('John Doe');
        expect(patient.email).toBe('john.doe@example.com');
        expect(patient.password).toBe('securepassword');
    });

    it('should not create a patient with an invalid email', async () => {
        await expect(
            Patients.create({
                name: 'Jane Doe',
                email: 'invalidemail',
                password: 'securepassword',
            })
        ).rejects.toThrow();
    });

    it('should read a patient', async () => {
        const patient = await Patients.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        const foundPatient = await Patients.findOne({ where: { email: 'john.doe@example.com' } });
        expect(foundPatient).toBeDefined();
        expect(foundPatient.name).toBe('John Doe');
    });

    it('should update a patient', async () => {
        const patient = await Patients.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        patient.name = 'John A. Doe';
        await patient.save();

        const updatedPatient = await Patients.findOne({ where: { email: 'john.doe@example.com' } });
        expect(updatedPatient.name).toBe('John A. Doe');
    });

    it('should delete a patient', async () => {
        const patient = await Patients.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        await Patients.destroy({ where: { email: patient.email } });

        const deletedPatient = await Patients.findOne({ where: { email: 'john.doe@example.com' } });
        expect(deletedPatient).toBeNull();
    });
});
