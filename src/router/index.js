import Cart from '../components/Cart';
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
        }
    ]
};

export default router;