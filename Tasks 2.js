// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function checkProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

const exampleObject = {
    name: 'Ivan',
    age: 55,
    city: 'Moscow'
};

const propertyNameToCheck = 'age';

const result = checkProperty(exampleObject, propertyNameToCheck);
console.log(result);
