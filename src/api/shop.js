import axios from 'axios'
import config from "../config";

const client = axios.create({
    baseURL: config.serverUrl,
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
    getProducts() {
        return this.execute('get', `/items`)
    },
    sendOrder(data) {
        return this.execute('post', `/order`, JSON.stringify(data))
    },
    applyPromo(data) {
        return this.execute('post', '/promo', JSON.stringify(data))
    }
}
