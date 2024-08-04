'use strict';

const { describe, it, expect, beforeEach } = require('@jest/globals');
const sinon = require('sinon');
const { Model } = require('sequelize');
const OrdersModel = require('../models/Order');

describe('Orders Model - Unit Tests', () => {
    let Orders;

    beforeEach(() => {
        Orders = OrdersModel({});
    });

    it('should validate order details', async () => {
        const order = Orders.build({
            address: '123 Main St',
            items: [{ productId: 1, quantity: 2 }],
            userId: 1,
            status: 'pending',
        });

        expect(order.address).toBe('123 Main St');
        expect(order.items).toEqual([{ productId: 1, quantity: 2 }]);
        expect(order.userId).toBe(1);
        expect(order.status).toBe('pending');
    });

    it('should throw an error with empty items', async () => {
        const invalidOrder = Orders.build({
            address: '123 Main St',
            items: [],
            userId: 1,
            status: 'pending',
        });

        await expect(invalidOrder.validate()).rejects.toThrow();
    });

    it('should save an order', async () => {
        const saveStub = sinon.stub(Model.prototype, 'save').resolvesThis();

        const order = Orders.build({
            address: '123 Main St',
            items: [{ productId: 1, quantity: 2 }],
            userId: 1,
            status: 'pending',
        });

        await order.save();
        expect(saveStub.calledOnce).toBe(true);

        saveStub.restore();
    });

    it('should destroy an order', async () => {
        const destroyStub = sinon.stub(Model.prototype, 'destroy').resolves();

        const order = Orders.build({
            address: '123 Main St',
            items: [{ productId: 1, quantity: 2 }],
            userId: 1,
            status: 'pending',
        });

        await order.destroy();
        expect(destroyStub.calledOnce).toBe(true);

        destroyStub.restore();
    });
});