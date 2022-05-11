export const push = (array = [], ...value) => {
    if (!Array.isArray(array)) {
        throw new TypeError('array parameter must be an array');
    }
    for (let item of value) {
        array[array.length] = item;
    }
    return array.length;
};
