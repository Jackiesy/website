
import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/ShoppingCar')), 'shoppingcart')
    },  {
        path: '/hello',
        component: r => require.ensure([], () => r(require('../page/HelloWorld')), 'hello')
    },]
}]