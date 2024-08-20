import axios from 'axios';
//const axios = require('axios');

const axiosInstance = axios.create({
    timeout: 1000,
    validateStatus: () => true
});

describe('Test Suite JSON Placeholder (GET/POST/PATCH)', () => {
    //GET requests
    test('Getting the information on Post 4', async () => {
        const result = await axiosInstance.get('https://jsonplaceholder.typicode.com/posts/4');
        console.log(result.data);
        expect(result.status).toEqual(200);
        expect(result.data.id).toBe(4);
        expect(result.data.userId).toEqual(1);
    });

    test('Getting the information on User 3', async () => {
        const result1 = await axiosInstance.get('https://jsonplaceholder.typicode.com/users/3');
        console.log(result1.data);
        expect(result1.status).toEqual(200);
        expect(result1.data).toHaveProperty('website');
        expect(result1.data.username).toHaveLength(8);
    });

    //POST request
    test.failing('Posting the new comment in Post 1', async () => {
        const result2 = axiosInstance.post('https://jsonplaceholder.typicode.com/posts', {
            userId: 10,
            id: 101,
            title: 'id minus libero illum nam ad officiis',
            body: 'quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia'
        });
        expect(result2.status).toBe(200);
        expect(result2.data.title).toContain('id minus');
        expect(result1.data.userId).toEqual(10);
        expect(result2.data.id).toBeDefined();
        expect(result2.data).toHaveProperty('body').toContain('quo deleniti');
        console.log(result2.data);
    });

    //PATCH request
    test('Updating the address for User 1', async () => {
        const result3 = await axiosInstance.patch('https://jsonplaceholder.typicode.com/users/1', {
            edited_field: 'address',
            address: {
                street: 'Vystavkova',
                suite: '22'
            }
        });
        console.log(result3.data);
        expect(result3.status).toBe(200);
        expect(result3.data.address.street).toBe('Vystavkova');
    });

    //PUT request
    test('Updating the information for User 3', async () => {
        const result4 = await axiosInstance.patch('https://jsonplaceholder.typicode.com/users/3', {
            id: 3,
            name: 'Olena Kozoriz',
            username: 'lenchik13',
            email: 'okozoriz@ukr.net',
            address: {
                street: 'Vystavkova',
                suite: '26',
                city: 'Chubynske',
                zipcode: '08321',
                geo: {
                    lat: '-45.6102',
                    lng: '-67.0653'
                }
            },
            phone: '3-879-123-3498',
            website: 'olena.info',
            company: {
                name: 'Allvue Systems',
                bs: 'investment accounting'
            }
        });
        expect(result4.status).toBe(200);
        expect(result4.data.address.street).toBe('Vystavkova');
        expect(result4.data.username).toEqual('lenchik13');
        expect(result4.data).toHaveProperty('company');
        expect(result4.data.phone).toHaveLength(14);
        console.log(result4.data);
    });
});
