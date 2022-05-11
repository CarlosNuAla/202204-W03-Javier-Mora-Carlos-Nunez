export const length = (array = []) => {
    if (!Array.isArray(array)) {
    throw new TypeError('array parameter must be an array');
    };    
    array = array.length;
    return array;
};