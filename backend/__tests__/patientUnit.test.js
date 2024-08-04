'use strict';

const { describe, it, expect, beforeEach } = require('@jest/globals');
const sinon = require('sinon');
const { Model } = require('sequelize');
const PatientsModel = require('../models/Patients');

describe('Patients Model - Unit Tests', () => {
    let Patients;

    beforeEach(() => {
        Patients = PatientsModel({});
    });

    it('should validate patient details', async () => {
        const patient = Patients.build({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        expect(patient.name).toBe('John Doe');
        expect(patient.email).toBe('john.doe@example.com');
        expect(patient.password).toBe('securepassword');
    });

    it('should throw an error with an invalid email', async () => {
        const invalidEmailPatient = Patients.build({
            name: 'Jane Doe',
            email: 'invalidemail',
            password: 'securepassword',
        });

        await expect(invalidEmailPatient.validate()).rejects.toThrow();
    });

    it('should save a patient', async () => {
        const saveStub = sinon.stub(Model.prototype, 'save').resolvesThis();

        const patient = Patients.build({
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

        const patient = Patients.build({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        await patient.destroy();
        expect(destroyStub.calledOnce).toBe(true);

        destroyStub.restore();
    });
});
