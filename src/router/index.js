import Cart from '../components/Cart';
import Order from '../components/Order';
import BaseLayout from '../components/layouts/Base-layout';

const router = {
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: BaseLayout
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/order',
            component: Order
        }
    ]
};

export default router;