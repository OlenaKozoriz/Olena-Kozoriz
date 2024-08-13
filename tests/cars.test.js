import { BaseController } from '../src/controllers/BaseController';
import { CarsController } from '../src/controllers/CarsController';

const baseController = new BaseController();
const carsController = new CarsController();

describe('Positive scenarios - creation of the new cars (all possible brands with all possible models)', () => {
    beforeAll(async () => {
        await carsController.login();
    });

    test('User can get all cars', async () => {
        const carsResponse = await carsController.getCars();
        expect(carsResponse.status).toBe(200);
        //console.log(carsResponse);
    });

    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars();
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(1, 1, 1020);
        carsResponse = await carsController.getCars();
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
    });
    // const brands = await carsController.getAllBrands();
    // expect(brands.status).toEqual(200);
    // expect(brands).not.toHaveLength(0);
    // for (const brand of brands) {
    //     const brandId = brand.id;
    //     const models = await getAllModelsForBrand(brandId);
    //     for (const model of models) {
    //         const carData = {
    //             brand_id: brandId,
    //             model_id: model.id
    //         };
    //         const finalResult = await createCars(carData);
    //         console.log(finalResult);
    //     }
    // }
});
