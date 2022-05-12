export const pop = (array = []) => {
    if (!Array.isArray(array)) {
        if (array === null || array === undefined) {
            throw new TypeError('array parameter must be an array');
        }
        throw new TypeError('array parameter must be an array');
    } else if (array.length === 0) {
        return undefined;
    } else {
        let dropOut = array[array.length - 1];
        array.length = array.length - 1;
        console.log(array);
        return dropOut;
    }
}