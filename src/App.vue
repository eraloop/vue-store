<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue"
import Home from "./components/Home"
import Auction from "./components/Auction"
import Contact from "./components/Contact"
import Checkout from './components/Checkout'
import singleProduct from "./components/singleProduct"

export default {

 components:{
        "app-footer":Footer,
        "app-home":Home,
        "app-auction":Auction,
        "app-contact-page":Contact,
        "app-checkout": Checkout,
        "app-product": singleProduct,
  },

  data () {
    return {

    }
  }
}
</script>

<style>
</style>
