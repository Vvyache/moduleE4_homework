// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
//
// Общие требования:
//     Имена классов, свойств и методов должны быть информативными;
//     Соблюдать best practices;
//     Использовать синтаксис ES6.

class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    turnOn() {
        this.pluggedIn = true;
        console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт.`);
    }

    turnOff() {
        this.pluggedIn = false;
        console.log(`${this.name} выключен.`);
    }
}

class DeskLamp extends ElectricDevice {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness(newBrightness) {
        if (this.pluggedIn) {
            this.brightness = newBrightness;
            console.log(`${this.name} яркость установлена на ${this.brightness}%.`);
        } else {
            console.log(`${this.name} выключен.`);
        }
    }
}

class Computer extends ElectricDevice {
    constructor(name, power, type) {
        super(name, power);
        this.type = type;
        this.running = false;
    }

    start() {
        if (this.pluggedIn) {
            this.running = true;
            console.log(`${this.name} включен.`);
        } else {
            console.log(`${this.name} выключен.`);
        }
    }

    shutdown() {
        this.running = false;
        console.log(`${this.name} выключен.`);
    }
}

function calculatePowerConsumption(devices) {
    const poweredDevices = devices.filter(device => device.pluggedIn);
    const totalPower = poweredDevices.reduce((sum, device) => sum + device.power, 0);
    console.log(`Общая мощность: ${totalPower} Вт`);
}

const deskLamp = new DeskLamp('Настольная лампа', 15, 50);
const desktopComputer = new Computer('Настольный комптютер', 200, 'Desktop PC');

deskLamp.turnOn();
deskLamp.adjustBrightness(75);

desktopComputer.turnOn();
desktopComputer.start();

calculatePowerConsumption([deskLamp, desktopComputer]);
