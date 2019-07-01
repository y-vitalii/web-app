import axios from 'axios'

const client = axios.create({
    baseURL: 'https://www.reddit.com',
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
            {name: '1', cost: '1'},
            {name: '2', cost: '1'},
            {name: '3', cost: '1'},
            {name: '4', cost: '1'},
            {name: '5', cost: '1'},
            {name: '1', cost: '1'},
            {name: '2', cost: '1'},
            {name: '3', cost: '1'},
            {name: '4', cost: '1'},
            {name: '5', cost: '1'}
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
            {name: '1', cost: '1'},
            {name: '2', cost: '1'},
            {name: '3', cost: '1'}
        ];

        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve();
            }, 50)
        }).then(function () {
            return testData;
        });
    }
}
