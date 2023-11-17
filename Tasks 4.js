// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:
//     Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
//     Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
//     У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//     Создать экземпляры каждого прибора.
//     Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

// Общие требования:
//     Имена функций, свойств и методов должны быть информативными.
//     Соблюдать best practices:
//     использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//     информативные имена (а не a, b);
//     четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
//     использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

// Родительская функция для электроприборов
function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

// Методы для включения и выключения прибора
ElectricDevice.prototype.turnOn = function () {
    this.pluggedIn = true;
    console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт.`);
};

ElectricDevice.prototype.turnOff = function () {
    this.pluggedIn = false;
    console.log(`${this.name} выключен.`);
};

// Конкретные приборы с собственными свойствами и методами
function DeskLamp(brightness) {
    ElectricDevice.call(this, 'Настольная лампа', 15);
    this.brightness = brightness || 100;
}

DeskLamp.prototype = Object.create(ElectricDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.adjustBrightness = function (brightness) {
    if (this.pluggedIn) {
        this.brightness = brightness;
        console.log(`${this.name}: яркость установлена на ${brightness}%.`);
    } else {
        console.log(`${this.name} выключен. Сначала включите.`);
    }
};

function Computer(type) {
    ElectricDevice.call(this, 'Компьютер', 200);
    this.type = type || 'Настольный';
    this.running = false;
}

Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.run = function () {
    if (this.pluggedIn) {
        this.running = true;
        console.log(`${this.type} компьютер включен.`);
    } else {
        console.log(`${this.name} выключен. Сначала включите.`);
    }
};

Computer.prototype.shutdown = function () {
    this.running = false;
    console.log(`${this.type} компьютер выключен.`);
};

// Создаем экземпляры приборов
const deskLamp = new DeskLamp(50);
const desktopComputer = new Computer();

// Используем приборы
deskLamp.turnOn();
deskLamp.adjustBrightness(75);

desktopComputer.turnOn();
desktopComputer.run();

// Подсчитываем потребляемую мощность
function calculatePowerConsumption(devices) {
    let totalPower = 0;
    devices.forEach(device => {
        if (device.pluggedIn) {
            totalPower += device.power;
        }
    });
    return totalPower;
}

const devices = [deskLamp, desktopComputer];
const totalPowerConsumption = calculatePowerConsumption(devices);
console.log(`Общая потребляемая мощность: ${totalPowerConsumption} Вт.`);
