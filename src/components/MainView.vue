<template>
  <div id="main-view">
      <app-header></app-header>
      <router-view></router-view>
      
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import Auction from "./Auction"
import Contact from "./Contact"
import Checkout from './Checkout'
import singleProduct from "./singleProduct"




export default {
    components:{

        "app-header":Header,
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

<style scoped>



</style>
