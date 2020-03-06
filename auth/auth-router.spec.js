const request = require('supertest');
const server = require('../server.js');

describe('auth router', () => {
    describe('seller endpoints', () => {
        test('should return 201 OK', () => {
            return request(server).post('/api/auth/register/sellers').then(res => {
                expect(res.status).toBe(201);
            })
        });
        test('should return names as router value', () => {
            return request(server).get('/api/auth/login/sellers').then(res => {
                expect(res.status).toBe(201);
            })
        });
    });
    describe('customer endpoints', () => {
        test('should return 201 OK', () => {
            return request(server).get('/api/auth/register/customers').then(res => {
                expect(res.status).toBe(201);
            })
        });
        test('should return ID as router value', () => {
            return request(server).get('/api/auth/login/customers').then(res => {
                expect(res.status).toBe(201);
            })
        });
    });
});