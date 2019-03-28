
import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/ShoppingCar')), 'shoppingcart')
    },  {
        path: '/payment',
        component: r => require.ensure([], () => r(require('../page/Payment')), 'payment')
    },{
        path: '/myorder',
        component: r => require.ensure([], () => r(require('../page/MyOrder')), 'myorder')
    },
        { path: '/orderdetail',
    component: r => require.ensure([], () => r(require('../page/OrderDetails')), 'orderdetail')
}]
}]