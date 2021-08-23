import Home from './components/Home.vue'
import Auction from './components/Auction.vue'
import Contact from './components/Contact.vue'
import Checkout from './components/CheckoutView.vue'
import singleProduct from './components/singleProduct.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Form from './components/FormFields.vue'

export default  [
    {
        name: "login",
        path: "/",
        component: Login
    },
    {
        path: "/auction",
        name: "auction",
        component: Auction
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
    {
        path: "/product/:id",
        name: "product",
        component: singleProduct
    },
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/form",
        name: "form",
        component: Form
    },
    {
        path: "*",
        component: { render: (h) => h("div", ["404! Page Not Found!"]) },
    },
]