'use strict';

const { Sequelize } = require('sequelize');
const { beforeAll, afterAll, describe, it, expect } = require('@jest/globals');
const ordersModel = require('../models/Order');

let sequelize;
let orders;

beforeAll(async () => {
    sequelize = new Sequelize('sqlite::memory:', { logging: false });
    orders = ordersModel(sequelize);

    await sequelize.sync();
});

afterAll(async () => {
    await sequelize.close();
});

describe('orders Model - Integration Tests', () => {
    it('should create an order with default status', async () => {
        const order = await orders.create({
            address: '123 Main St',
            items: [{ productId: 1, quantity: 2 }],
            userId: 1,
        });

        expect(order).toBeDefined();
        expect(order.address).toBe('123 Main St');
        expect(order.status).toBe('pending');
        expect(order.items).toEqual([{ productId: 1, quantity: 2 }]);
        expect(order.userId).toBe(1);
    });

    it('should not create an order with empty items', async () => {
        await expect(
            orders.create({
                address: '123 Main St',
                items: [],
                userId: 1,
            })
        ).rejects.toThrow();
    });

    it('should create an order with a specified status', async () => {
        const order = await orders.create({
            address: '123 Main St',
            status: 'processing',
            items: [{ productId: 1, quantity: 2 }],
            userId: 1,
        });

        expect(order).toBeDefined();
        expect(order.status).toBe('processing');
    });

    it('should update an order status', async () => {
        const order = await orders.create({
            address: '123 Main St',
            items: [{ productId: 1, quantity: 2 }],
            userId: 1,
        });

        order.status = 'completed';
        await order.save();

        const updatedOrder = await orders.findOne({ where: { id: order.id } });
        expect(updatedOrder.status).toBe('completed');
    });

    it('should delete an order', async () => {
        const order = await orders.create({
            address: '123 Main St',
            items: [{ productId: 1, quantity: 2 }],
            userId: 1,
        });

        await orders.destroy({ where: { id: order.id } });

        const deletedOrder = await orders.findOne({ where: { id: order.id } });
        expect(deletedOrder).toBeNull();
    });
});
