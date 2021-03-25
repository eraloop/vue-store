import Home from './components/Home.vue'
import Auction from './components/Auction.vue'
import Contact from './components/Contact.vue'
import Checkout from './components/Checkout.vue'
import singleProduct from './components/singleProduct.vue'

export default  [ 
    {  
        name: "home",
        path: "/",
        component: Home
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
        path: "/product",
        name: "product",
        component: singleProduct
    },
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout
    },
    {
        path: "*",
        component: { render: (h) => h("div", ["404! Page Not Found!"]) },
    },
]