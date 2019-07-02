import Header from '../components/Header';
import Content from '../components/Content';
import BaseLayout from '../components/layouts/Base-layout';

const router = {
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: BaseLayout,
            children: [
                {
                    path: 'content',
                    component: Content
                },
                {
                    path: 'header',
                    component: Header,
                }
            ]
        }
        // { path: '/foo', component: Header }
    ]
};

export default router;