// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.


function createObjectWithoutPrototype() {
    return Object.create(null);
}


const emptyObject = createObjectWithoutPrototype();

console.log(Object.getPrototypeOf(emptyObject))
