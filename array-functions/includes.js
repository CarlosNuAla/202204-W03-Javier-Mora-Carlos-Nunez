export const includes = (array = [], value) => {
    if (!Array.isArray(array)) {
        throw new TypeError('array parameter must be a array');
    }
    if (array.length === 0) {
        throw new TypeError('Includes of empty array with no initial value');
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return true;
    }
    return false;
};
