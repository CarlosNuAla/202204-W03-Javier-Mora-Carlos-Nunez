import { length } from './length.js';

describe('Given function length', () => {
    describe('When not recive parameters', () => {
        test('Then should be 0', () => {
            const expectedResult = 0;
            const result = length();
            expect(result).toBe(expectedResult)
        })
    })
    
    describe('When recive null', () => {
        test('Then should be TypeError', () => {
            const values = [null];
            expect(() => length(...values)).toThrow(
                TypeError('array parameter must be an array')
            );
        });
    });
    
    describe('When recive [], [ ]', () => {
        test('Then should be 0', () => {
            const values = [[], [ ]];
            const expectedResult = 0;
            const result = length(...values)
            expect(result).toBe(expectedResult);
        });
    });

    describe('When recive [1, 2, 3]', () => {
        test('Then should be 3', () => {
            const values = [1, 2, 3];
            const expectedResult = 3;
            const result = length(values)
            expect(result).toBe(expectedResult);
        });
    });

    describe('When recive [10, 24]', () => {
        test('Then should be 3', () => {
            const values = [10, 24];
            const expectedResult = 2;
            const result = length(values)
            expect(result).toBe(expectedResult);
        });
    });
});