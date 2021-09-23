export const checkMissing = (object: any) => {
    let arr = Object.keys(object)
    for (let el of arr) {
        if (object[el] === null || object[el] === undefined || object[el] === "") throw new Error(`param ${el} missing`)
    }
}