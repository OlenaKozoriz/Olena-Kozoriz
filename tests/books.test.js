import { BaseController } from '../src/controllers/BaseController';
import { BooksController } from '../src/controllers/BooksController';

const baseController = new BaseController();
const booksController = new BooksController();

describe('API testing)', () => {
    beforeAll(async () => {
        await baseController.login();
    });

    test.only('User can get all the books', async () => {
        const booksResponse = await booksController.getAllBooks();
        console.log(booksResponse);
        expect(booksResponse.status).toBe(200);
        expect(booksResponse.data.publisher).toBeDefined();
    });
});
