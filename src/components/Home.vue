<template>
  <div id="home">
      <app-navbar
      Login="Login" Register="Register" Logout = "Logout" routing_nav
      :Home = true :Auction= true :Contact= true
      ></app-navbar>
      <app-hero-section></app-hero-section>
      <app-partners></app-partners>
      <app-featured-products></app-featured-products>
      <app-products></app-products>
      <app-card></app-card>
      <app-callto-action></app-callto-action>
      <app-footer-links></app-footer-links>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./Header"
import Product from "./Product"
import HeroSection from "./HeroSection"
import FeaturedProducts from "./FeaturedProducts"
import Partners from './Partners'
import Card from './Card'
import CallToAction from './CallToAction'
import FooterLinks  from './FooterLinks'
import Footer  from './Footer'

export default {
    components:{
        "app-navbar":Header,
        "app-products":Product,
        "app-hero-section": HeroSection,
        "app-featured-products":FeaturedProducts,
        "app-partners": Partners,
        "app-card": Card,
        "app-callto-action": CallToAction,
        "app-footer-links": FooterLinks,
        "app-footer": Footer,

    },

  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
