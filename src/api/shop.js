import axios from 'axios'

const client = axios.create({
    baseURL: 'http://157.230.98.219:88/api',
    json: true
});

export default {
    async execute(method, resource, data) {
        return client({
            method,
            url: resource,
            data,
            headers: {
                Authorization: 'Authorization'
            }
        }).then(req => {
            return req.data
        })
    },
    getPosts() {
        return this.execute('get', 'https://api.coindesk.com/v1/bpi/currentprice.json')
    },
    getPost(id) {
        return this.execute('get', `/posts/${id}`)
    },
    createPost(data) {
        return this.execute('post', '/posts', data)
    },
    updatePost(id, data) {
        return this.execute('put', `/posts/${id}`, data)
    },
    deletePost(id) {
        return this.execute('delete', `/posts/${id}`)
    },
    getDrinks() {
        const testData = [
            {key: 1, name: 'img', cost: 100, imgSrc: require('../assets/products/1.png')},
            {key: 2, name: 'img', cost: 200, imgSrc: require('../assets/products/1.png')},
            {key: 3, name: 'img', cost: 300, imgSrc: require('../assets/products/1.png')},
            {key: 4, name: 'img', cost: 400, imgSrc: require('../assets/products/1.png')},
            {key: 5, name: 'img', cost: 500, imgSrc: require('../assets/products/1.png')},
            {key: 6, name: 'img', cost: 600, imgSrc: require('../assets/products/1.png')},
            {key: 7, name: 'img', cost: 700, imgSrc: require('../assets/products/1.png')}
        ];

        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve();
            }, 50)
        }).then(function () {
            return testData;
        });
    },
    getFoods() {
        const testData = [
            {key: 11, name: 'img1', cost: 100, imgSrc: require('../assets/products/2.jpg')},
            {key: 12, name: 'img1', cost: 200, imgSrc: require('../assets/products/2.jpg')},
            {key: 13, name: 'img1', cost: 300, imgSrc: require('../assets/products/2.jpg')},
            {key: 14, name: 'img1', cost: 400, imgSrc: require('../assets/products/2.jpg')}
        ];

        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve();
            }, 50)
        }).then(function () {
            return testData;
        });
    },
    getProducts() {
        return this.execute('get', `/items`)
    },
    sendOrder(data) {
        return this.execute('post', `/order`, JSON.stringify(data))
    }
}
