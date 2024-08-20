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

    async createCar(carBrandId, carModelId, mileage) {
        return this.post(this._createCarEndpoint, {
            carBrandId,
            carModelId,
            mileage
        });
    }
}
