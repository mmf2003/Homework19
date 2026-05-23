/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

function sumBigIntegers(numStr1, numStr2) {
    // используем преоброзование типов.
    return BigInt(numStr1) + BigInt(numStr2);
}

console.log(`

Три примера =>
    function sumBigIntegers(numStr1, numStr2) {
        return BigInt(numStr1) + BigInt(numStr2);
    }`);
console.log(sumBigIntegers('9007199254740991', '9007199254740991'));
console.log(sumBigIntegers('1111111111', '1111111111'));
console.log(sumBigIntegers('99999999999999', '111111111111'));
