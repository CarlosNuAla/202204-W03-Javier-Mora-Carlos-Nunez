import { map } from './map.js';

describe('Given function map', () => {
    describe('When receive null', () => {
        test('Then should TypeError', () => {
            const values = [null];
            expect(() => map(...values)).toThrow(
                TypeError('array parameter must be a array')
            );
        });
    });

    describe('When receive []', () => {
        test('Then should TypeError', () => {
            const values = [[]];
            expect(() => map(...values)).toThrow(
                TypeError('fn parameter must be a function')
            );
        });
    });

    describe('When receive [],null', () => {
        test('Then should TypeError', () => {
            const values = [[], null];
            expect(() => map(...values)).toThrow(
                TypeError('fn parameter must be a function')
            );
        });
    });

    describe('When receive [1,2,2],(e) => e === 2', () => {
        test('Then should be [false,true,true]', () => {
            const values = [[1, 2, 2], (e) => e === 2];
            const expectedResult = [false, true, true];
            const result = map(...values);
            expect(result).toEqual(expectedResult);
        });
    });

    describe('When receive [{a: 1},{a: 1, b:2}],(e) => e.b === 2', () => {
        test('Then should be [false,true]', () => {
            const values = [[{ a: 1 }, { a: 1, b: 2 }], (e) => e.b === 2];
            const expectedResult = [false, true];
            const result = map(...values);
            expect(result).toEqual(expectedResult);
        });
    });

    describe('When receive [1,2,3],(e,i) => i', () => {
        test('Then should be [0,1,2]', () => {
            const values = [[1, 2, 3], (e, i) => i];
            const expectedResult = [0, 1, 2];
            const result = map(...values);
            expect(result).toEqual(expectedResult);
        });
    });

    describe('When receive [1,2,3],(e,i,arr) => arr.length', () => {
        test('Then should be [3,3,3]', () => {
            const values = [[1, 2, 3], (e, i, arr) => arr.length];
            const expectedResult = [3, 3, 3];
            const result = map(...values);
            expect(result).toEqual(expectedResult);
        });
    });
});
