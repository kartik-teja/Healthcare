'use strict';

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
    class Doctors extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Define associations here
            // e.g., Doctors.hasMany(models.Appointments);
        }
    }

    Doctors.init(
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
            modelName: 'Doctors',
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

    return Doctors;
};