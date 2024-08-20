import { BaseController } from './BaseController';

export class BooksController extends BaseController {
    constructor() {
        super();
        this._booksEndpoint = '/BookStore/v1/Books'; //getting the existing books
    }
    //Method for fetching all possible cars
    async getAllBooks() {
        return this.get(this._getAllBooksEndpoint);
    }
}
