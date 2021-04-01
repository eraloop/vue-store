<template>
  <div id="home">
      <app-hero-section></app-hero-section>
      <app-partners></app-partners>
      <app-featured-products></app-featured-products>
      <app-products></app-products>
      <app-card></app-card>
      <app-callto-action></app-callto-action>
      <app-footer-links></app-footer-links>
  </div>
</template>

<script>

import Product from "./Product"
import HeroSection from "./HeroSection"
import FeaturedProducts from "./FeaturedProducts"
import Partners from './Partners'
import Card from './Card'
import CallToAction from './CallToAction'
import FooterLinks  from './FooterLinks'

export default {
    components:{

        "app-products":Product,
        "app-hero-section": HeroSection,
        "app-featured-products":FeaturedProducts,
        "app-partners": Partners,
        "app-card": Card,
        "app-callto-action": CallToAction,
        "app-footer-links": FooterLinks,

    },

  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

</style>
