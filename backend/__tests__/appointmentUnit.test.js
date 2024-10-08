'use strict';


const { describe, it, expect, beforeEach } = require('@jest/globals');
const sinon = require('sinon');
const { Sequelize, Model } = require('sequelize');
const appointmentsModel = require('../models/Appointment');

describe('appointments Model - Unit Tests', () => {
    let appointments;
    let sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize('sqlite::memory:', { logging: false });
        appointments = appointmentsModel(sequelize);

        await sequelize.sync();
    });

    it('should validate the appointment status', async () => {
        const appointment = appointments.build({
            time: 1627843620,
            doctorid: 33,
            patientid: 42,
            status: 'pending',
        });

        expect(appointment.status).toBe('pending');
    });

    it('should throw an error with an invalid status', async () => {
        const invalidStatusAppointment = appointments.build({
            time: 1627843620,
            doctorid: 33,
            patientid: 42,
            status: 'invalid_status',
        });

        await expect(invalidStatusAppointment.validate()).rejects.toThrow();
    });

    it('should save an appointment', async () => {
        const saveStub = sinon.stub(Model.prototype, 'save').resolvesThis();

        const appointment = appointments.build({
            time: 1627843620,
            doctorid: 33,
            patientid: 42,
            status: 'pending',
        });

        await appointment.save();
        expect(saveStub.calledOnce).toBe(true);

        saveStub.restore();
    });

    it('should destroy an appointment', async () => {
        const destroyStub = sinon.stub(Model.prototype, 'destroy').resolves();

        const appointment = appointments.build({
            time: 1627843620,
            doctorid: 33,
            patientid: 42,
            status: 'pending',
        });

        await appointment.destroy();
        expect(destroyStub.calledOnce).toBe(true);

        destroyStub.restore();
    });
});
