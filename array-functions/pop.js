export const pop = (array = []) => {
    if (array.length === 0) {
        return undefined;
    } else {
        let dropOut = array[array.length - 1];
        array.length = array.length - 1;
        return dropOut;
    }
}