export function convertObject(id, value, isActive) {
    if(isActive === null || isActive === undefined) {
        isActive = true;
    }
    let object = {
        id: {id},
        data: {value},
        isActive: {isActive},
    };
    return object;
}
