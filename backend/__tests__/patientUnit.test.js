'use strict';

const { describe, it, expect, beforeEach } = require('@jest/globals');
const sinon = require('sinon');
const { Model } = require('sequelize');
const patientsModel = require('../models/Patients');

describe('patients Model - Unit Tests', () => {
    let patients;

    beforeEach(() => {
        patients = patientsModel({});
    });

    it('should validate patient details', async () => {
        const patient = patients.build({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'securepassword',
        });

        expect(patient.name).toBe('John Doe');
        expect(patient.email).toBe('john.doe@example.com');
        expect(patient.password).toBe('securepassword');
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
