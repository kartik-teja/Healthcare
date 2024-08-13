'use strict';
const bcrypt = require('bcrypt');
const { describe, it, expect, beforeEach } = require('@jest/globals');
const sinon = require('sinon');
const { Sequelize, Model } = require('sequelize');
const patientsModel = require('../models/Patients');

describe('patients Model - Unit Tests', () => {
    let patients;
    let sequelize;


    beforeEach(async () => {
        sequelize = new Sequelize('sqlite::memory:', { logging: false });
        patients = patientsModel(sequelize);

        await sequelize.sync();
    });

    it('should validate patient details', async () => {

        const salt = await bcrypt.genSalt(10);
        const patient = patients.build({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        expect(patient.name).toBe('John Doe');
        expect(patient.email).toBe('john.doe@example.com');


    });

    it('should throw an error with an invalid email', async () => {
        const invalidEmailPatient = patients.build({
            name: 'Jane Doe',
            email: 'invalidemail',
            password: 'securepassword',
        });

        await expect(invalidEmailPatient.validate()).rejects.toThrow();
    });

    it('should save a patient', async () => {
        const saveStub = sinon.stub(Model.prototype, 'save').resolvesThis();

        const patient = patients.build({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        await patient.save();
        expect(saveStub.calledOnce).toBe(true);

        saveStub.restore();
    });

    it('should destroy a patient', async () => {
        const destroyStub = sinon.stub(Model.prototype, 'destroy').resolves();

        const patient = patients.build({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        await patient.destroy();
        expect(destroyStub.calledOnce).toBe(true);

        destroyStub.restore();
    });
});
