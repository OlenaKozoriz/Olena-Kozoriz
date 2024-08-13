import { BaseController } from './BaseController';

export class CarsController extends BaseController {
    constructor() {
        super();
        this._createCarEndpoint = '/cars'; //getting the existing cars
        this._brandsEndpoint = '/cars/brands'; //getting all possible brands of the cars
        this._modelsEndpoint = '/cars/models'; //getting all possible models of the cars
    }
    //Method for fetching all possible cars
    async getCars() {
        return this.get(this.createCarEndpoint);
    }
    //Method for fetching all possible cars' brands
    // async getAllBrands() {
    //     const allBrands = await this._axios.get(this._brandsEndpoint);
    //     return allBrands;
    // }

    //Method for fetching all possible cars' models associated with the given brand
    // async getAllModelsForBrand(brandId) {
    //     const allModels = await this._axios.get(this._modelsEndpoint);
    //     return allModels;
    // }
    //Method for creation all possible combinations of brands and models
    // async createCars(carData) {
    //     const result = await this._axios.post(this._createCarEndpoint, carData);
    //     return result;
    // }
    async createCar(carBrandId, carModelId, mileage) {
        return this.post(this._createCarEndpoint, {
            carBrandId,
            carModelId,
            mileage
        });
    }
}
