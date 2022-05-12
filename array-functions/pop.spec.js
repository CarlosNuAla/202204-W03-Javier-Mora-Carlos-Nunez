import { pop } from "./pop.js";

describe('Given a function pop', () => {
    describe('When no receive parameters', () => {
        test('Then should TypeError', () => {
            expect(() => pop().toThrow(
                TypeError('array parameter must be an array')
            ))
        })
    })

    describe('When parameter is undefined', () => {
        test('Then should TypeError', () => {
            expect(() => pop(undefined).toThrow(
                TypeError('array parameter must be an array')
            ))
        })
    })

    describe('When parameter is null', () => {
        test('Then should TypeError', () => {
            expect(() => pop(null).toThrow(
                TypeError('array parameter must be an array')
            ))
        })
    })

    describe('When parameters are string or number', () => {
        test('Then should TypeError', () => {
            const values = ['coders'];
            expect(() => pop(...values).toThrow(
                TypeError('array parameter must be an array')
            ))
        })

        test('Then should TypeError', () => {
            const values = [44];
            expect(() => pop(...values).toThrow(
                TypeError('array parameter must be an array')
            ))
        })
    })

    describe('When receive [1, 2]', () => {
        test('Then should "2"', () => {
            const values = [[1, 2]];
            const expectedResult = 2;
            const result = pop(...values);
            expect(result).toBe(expectedResult);
        });
    });
    
    describe('When receive ["a", "b"]', () => {
        test('Then should "b"', () => {
            const values = [['a', 'b']];
            const expectedResult = 'b';
            const result = pop(...values);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When array.length = 0', () => {
        test('Then should undefined', () => {
            const values = [[]];
            const result = pop(...values);
            expect(result).toBe(undefined);
        });
    });
})