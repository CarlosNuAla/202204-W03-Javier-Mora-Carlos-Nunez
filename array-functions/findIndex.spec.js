import { findIndex } from './findIndex.js';

describe('Given function findIndex', () => {
    describe('When receive null', () => {
        test('Then should be TypeError', () => {
            const values = [null];
            expect(() => findIndex(...values)).toThrow(
                TypeError('array parameter must be a array')
            );
        });
    });

    describe('When receive []', () => {
        test('Then should be TypeError', () => {
            const values = [[]];
            expect(() => findIndex(...values)).toThrow(
                TypeError('fn parameter must be a function')
            );
        });
    });

    describe('When receive [],null', () => {
        test('Then should be TypeError', () => {
            const values = [[], null];
            expect(() => findIndex(...values)).toThrow(
                TypeError('fn parameter must be a function')
            );
        });
    });

    describe('When receive [1,2],(e) => e === 2', () => {
        test('Then should be 1', () => {
            const values = [[1, 2], (e) => e === 2];
            const expectedResult = 1;
            const result = findIndex(...values);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When receive [{a: 1},{a: 1, b:2}],(e) => e.a === 1', () => {
        test('Then should be 0', () => {
            const values = [[{ a: 1 }, { a: 1, b: 2 }], (e) => e.a === 1];
            const expectedResult = 0;
            const result = findIndex(...values);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When receive [1,2],(e) => e === 3', () => {
        test('Then should be -1', () => {
            const values = [[1, 2], (e) => e === 3];
            const expectedResult = -1;
            const result = findIndex(...values);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When receive [1,2],(e,i) => i === 0', () => {
        test('Then should be 0', () => {
            const values = [[1, 2], (e, i) => i === 0];
            const expectedResult = 0;
            const result = findIndex(...values);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When receive [1,2],(e,i,arr) => i === arr.length-1', () => {
        test('Then should be 2', () => {
            const values = [[1, 2], (e, i, arr) => i === arr.length - 1];
            const expectedResult = 1;
            const result = findIndex(...values);
            expect(result).toBe(expectedResult);
        });
    });
});
