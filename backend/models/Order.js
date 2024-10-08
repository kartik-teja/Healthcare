// models/orders.js
'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class orders extends Model {

    }

    orders.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM,
                values: ['pending', 'processing', 'completed', 'cancelled'],
                allowNull: false,
                defaultValue: 'pending',
            },
            items: {
                type: DataTypes.JSON,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'orders',
            timestamps: true,
        }
    );

    return orders;
};
