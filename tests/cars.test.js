import { BaseController } from '../src/controllers/BaseController';
import { CarsController } from '../src/controllers/CarsController';

const baseController = new BaseController();
const carsController = new CarsController();

describe('Positive scenarios - creation of the new cars (all possible brands with all possible models)', () => {
    beforeAll(async () => {
        await baseController.login();
    });

    test('User can get all the cars', async () => {
        const carsResponse = await carsController.getCars();
        expect(carsResponse.status).toBe(200);
        console.log(carsResponse.data.data);
    });

    test('User can create a new car with brandId=1 ("Audi") and modelId=1 ("TT")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(1, 1, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=1 ("Audi") and modelId=2 ("R8")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(1, 2, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=1 ("Audi") and modelId=3 ("Q7")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(1, 3, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=1 ("Audi") and modelId=4 ("A6")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(1, 4, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=1 ("Audi") and modelId=5 ("A8")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(1, 5, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=2 ("BMW") and modelId=6 ("3")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(2, 6, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=2 ("BMW") and modelId=7 ("5")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(2, 7, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=2 ("BMW") and modelId=8 ("X5")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(2, 8, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=2 ("BMW") and modelId=9 ("X6")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(2, 9, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=2 ("BMW") and modelId=10 ("Z3")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(2, 10, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=3 ("Ford") and modelId=11 ("Fiesta")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(3, 11, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=3 ("Ford") and modelId=12 ("Focus")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(3, 12, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=3 ("Ford") and modelId=13 ("Fusion")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(3, 13, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=3 ("Ford") and modelId=14 ("Mondeo")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(3, 14, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=3 ("Ford") and modelId=15 ("Sierra")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(3, 15, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=4 ("Porsche") and modelId=16 ("911")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(4, 16, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=4 ("Porsche") and modelId=17 ("Cayenne")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(4, 17, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=4 ("Porsche") and modelId=18 ("Panamera")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(4, 18, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=5 ("Fiat") and modelId=19 ("Palio")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(5, 19, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=5 ("Fiat") and modelId=20 ("Ducato")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(5, 20, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=5 ("Fiat") and modelId=21 ("Panda")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(5, 21, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=5 ("Fiat") and modelId=22 ("Punto")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(5, 22, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User can create a new car with brandId=5 ("Fiat") and modelId=23 ("Scudo")', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(5, 23, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });
});

describe('Negative scenarios - creation of cars with non-existing parameters)', () => {
    beforeAll(async () => {
        await baseController.login();
    });

    test('User tries to create a new car with non-existing brand)', async () => {
        let carsResponse = await carsController.getCars();
        const newCarResponse = await carsController.createCar(6, 23, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User tries to create a new car with non-existing model)', async () => {
        let carsResponse = await carsController.getCars();
        const newCarResponse = await carsController.createCar(5, 24, 1234);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });

    test('User tries to create a new car with a huge miealage)', async () => {
        let carsResponse = await carsController.getCars();
        const newCarResponse = await carsController.createCar(5, 23, 198757656453524323424);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });
});
