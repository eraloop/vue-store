<template>
  <div id="checkout">
      <h1>Checkout page here </h1>
      <div v-for="item in cardItems" :key="item.name">
          <p>{{item.product}}</p>
          <p>{{item.quantity}}</p>
      </div>

    <!-- <div class="container center">
      <div class="productView">
        <div
          class="product"
          v-for="product in SaleProducts.generalProducts"
          :key="product"
        >
          <div class="head">
            <img :src="product.image" alt="" />
            <p></p>
          </div>
          <div class="details">
            <section class="product-name">
              <h2>{{ product.name }}</h2>
            </section>
            <section class="des">
              <p class="description">
                {{ product.description }}
              </p>
            </section>

            <section class="price-section">
              <section class="prices">
                <span>Price: </span>
                <p class="price">${{ product.price }}</p>
              </section>
              <section class="card">
                <button>+</button>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed:{
      ...mapGetters([
          "cardItems"
      ])
  },

};
</script>

<style scoped>
</style>
