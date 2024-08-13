import axios from 'axios';

export class BaseController {
    constructor() {
        this._options = {
            baseUrl: 'https://qauto.forstudy.space/api',
            validateStatus: () => true
        };
        this._axios = axios.create(this._options);
    }
    async login() {
        const authResponse = await this._axios.post('/auth/signin', {
            email: 'lenchik13@ukr.net',
            password: 'Alla26091995',
            remember: false
        });
        // console.log(authResponse);
        const sid = authResponse.headers['set-cookie']; //[0].split(';')[0];
        console.log(sid);
        this._options.headers = { Cookie: sid }; //adding the headers as the additional property of 'this._options'
    }

    async get(url) {
        return this._axios.get(url, this._options);
    }

    async post(url, body) {
        return this._axios.post(url, body, this._options);
    }

    async delete(url, body) {
        return this._axios.delete(url, {
            ...this._options,
            ...{ data: body }
        });
    }
}
