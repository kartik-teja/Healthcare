'use strict';

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
    class doctors extends Model {

        static associate(models) {
            // Define associations here
            doctors.hasMany(models.appointments);
        }
    }

    doctors.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            specialisation: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'doctors',
            hooks: {
                beforeCreate: async (doctor, options) => {
                    if (doctor.password) {
                        const salt = await bcrypt.genSalt(10);
                        doctor.password = await bcrypt.hash(doctor.password, salt);
                    }
                },
                beforeUpdate: async (doctor, options) => {
                    if (doctor.password) {
                        const salt = await bcrypt.genSalt(10);
                        doctor.password = await bcrypt.hash(doctor.password, salt);
                    }
                },
            },
            indexes: [
                {
                    unique: true,
                    fields: ['email'],
                },
            ],
        }
    );

    return doctors;
};
