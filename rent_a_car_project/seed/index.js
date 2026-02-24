const { faker } = require('@faker-js/faker');
const Car = require('./src/entities/car');
const CarCategory = require('./src/entities/carCategory');
const Costumer = require('./src/entities/costumer');
const { join } = require('path');
const seederBaseFolder = join(__dirname, '../', 'database');
const { writeFile } = require('fs/promises');
const ITEMS_AMOUNT = 2;


const carCategory = new CarCategory({
    id: faker.string.uuid(),
    name: faker.vehicle.type(),
    carIds: [],
    price: faker.commerce.price(20, 100)
});

const cars = [];
const customers = [];

for (let i = 0; i < ITEMS_AMOUNT; i++) {
    const car = new Car({
        id: faker.string.uuid(),
        name: faker.vehicle.model(),
        available: faker.datatype.boolean(),
        gasAvailable: faker.datatype.boolean(),
        realeseYear: faker.date.past().getFullYear()
    });

    carCategory.carIds.push(car.id);
    cars.push(car);
}

const customer = new Costumer({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 70 })
});

customers.push(customer);

const write = (filename, data) => { writeFile(join(seederBaseFolder, filename), JSON.stringify(data, null, 2)) }

    ; (async () => {

        await write('cars.json', cars);
        await write('costumers.json', customers);
        await write('carCategory.json', [carCategory]);

        console.log('cars', cars);
        console.log('carCategory', carCategory);

    })();