'use strict';

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
    class Patient extends Model {
        // Instance method to compare password
        async comparePassword(candidatePassword) {
            return bcrypt.compare(candidatePassword, this.password);
        }
    }

    Patient.init(
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
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                set(value) {
                    // Hash the password before saving it to the database
                    const hashedPassword = bcrypt.hashSync(value, 10);
                    this.setDataValue('password', hashedPassword);
                }
            },
        },
        {
            sequelize,
            modelName: 'Patient',
        }
    );

    return Patient;
};
