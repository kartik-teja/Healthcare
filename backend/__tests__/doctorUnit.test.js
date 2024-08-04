'use strict';

const { describe, it, expect, beforeEach } = require('@jest/globals');
const sinon = require('sinon');
const { Model } = require('sequelize');
const DoctorsModel = require('../models/Doctors');
const salt = await bcrypt.genSalt(10);


describe('Doctors Model - Unit Tests', () => {
  let Doctors;

  beforeEach(() => {
    Doctors = DoctorsModel({});
  });

  it('should validate the doctor details', async () => {
    const doctor = Doctors.build({
      name: 'Dr. John Doe',
      specialisation: 'Cardiology',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
      password: 'securepassword',
    });

    expect(doctor.name).toBe('Dr. John Doe');
    expect(doctor.specialisation).toBe('Cardiology');
    expect(doctor.email).toBe('john.doe@example.com');
    expect(doctor.phone).toBe('123-456-7890');
    expect(doctor.address).toBe('123 Main St, Anytown, USA');
    expect(doctor.password).toBe(await bcrypt.hash('securepassword', salt));
  });

  it('should throw an error with an invalid email', async () => {
    const invalidEmailDoctor = Doctors.build({
      name: 'Dr. Jane Doe',
      specialisation: 'Neurology',
      email: 'invalidemail',
      phone: '123-456-7890',
      address: '456 Elm St, Anytown, USA',
      password: 'securepassword',
    });

    await expect(invalidEmailDoctor.validate()).rejects.toThrow();
  });

  it('should save a doctor', async () => {
    const saveStub = sinon.stub(Model.prototype, 'save').resolvesThis();

    const doctor = Doctors.build({
      name: 'Dr. John Doe',
      specialisation: 'Cardiology',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
      password: 'securepassword',
    });

    await doctor.save();
    expect(saveStub.calledOnce).toBe(true);

    saveStub.restore();
  });

  it('should destroy a doctor', async () => {
    const destroyStub = sinon.stub(Model.prototype, 'destroy').resolves();

    const doctor = Doctors.build({
      name: 'Dr. John Doe',
      specialisation: 'Cardiology',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
      password: 'securepassword',
    });

    await doctor.destroy();
    expect(destroyStub.calledOnce).toBe(true);

    destroyStub.restore();
  });
});
