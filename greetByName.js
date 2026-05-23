/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад “Hi”, “Hey” або “Hello”.
 name: Рядок, який представляє ім’я особи, наприклад “John”, “Bob” або “Mary”.

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

 Ось приклад використання цієї функції:

 console.log(greet('Hi', 'John')) // Hi, John
 console.log(greet('Hey', 'Bob')) // Hey, Bob
 console.log(greet('Hello', 'Mary')) // Hello, Mary
*/

// используем стрелочную функцию
const greetByName = (msg, name) => `${msg}, ${name}`;


console.log('\n\nТри примера => const greetByName = (msg, name) => `${msg}, ${name}`;');
console.log(greetByName('I am here', 'John Snow'));
console.log(greetByName('I love JS', 'Oleksandr Sidelnikov'));
console.log(greetByName('I do not understand Node yet', 'Someone'));