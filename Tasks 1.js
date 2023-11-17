// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит
// в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.


function displayOwnProperties(obj) {
    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${obj[key]}`);

        }
    }
}

const exampleObj = {
    name: 'Ivan',
    age: 45,
    city: 'SPB'
};

displayOwnProperties(exampleObj)
