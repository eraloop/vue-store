<template>
  <div id="auction">
    <h1>Auction page</h1>
    <div class="products">
      <div class="femaleProducts">
        <div class="productView">
          <div
            class="product"
            v-for="product in auctionSales.femaleAuction"
            :key="product"
          >
            <div class="head">
              <img :src="product.image" alt="" />
              <p></p>
            </div>
            <div class="details">
              <section class="product-name">
                <h2>{{ product.name }}</h2>
                <p class="percent">{{ product.percent }}% Off</p>
              </section>
              <section class="des">
                <p class="description">
                  {{ product.description }}
                </p>
              </section>

              <section class="price-section">
                <section class="prices">
                  <span>Price: </span>
                  <p class="Fprice">${{ product.Fprice }}</p>
                  <p class="price">${{ product.price }}</p>
                </section>
                <section class="card">
                  <button>+</button>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div class="generalProducts">
        <div class="productView">
          <div
            class="product"
            v-for="product in auctionSales.generalAuction"
            :key="product"
          >
            <div class="head">
              <img :src="product.image" alt="" />
              <p></p>
            </div>
            <div class="details">
              <section class="product-name">
                <h2>{{ product.name }}</h2>
                <p class="percent">{{ product.percent }}% Off</p>
              </section>
              <section class="des">
                <p class="description">
                  {{ product.description }}
                </p>
              </section>

              <section class="price-section">
                <section class="prices">
                  <span>Price: </span>
                  <p class="Fprice">${{ product.Fprice }}</p>
                  <p class="price">${{ product.price }}</p>
                </section>
                <section class="card">
                  <button>+</button>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div class="maleProducts">
        <div class="productView">
          <div
            class="product"
            v-for="product in auctionSales.maleAuction"
            :key="product"
          >
            <div class="head">
              <img :src="product.image" alt="" />
              <p></p>
            </div>
            <div class="details">
              <section class="product-name">
                <h2>{{ product.name }}</h2>
                <p class="percent">{{ product.percent }}% Off</p>
              </section>
              <section class="des">
                <p class="description">
                  {{ product.description }}
                </p>
              </section>

              <section class="price-section">
                <section class="prices">
                  <span>Price: </span>
                  <p class="Fprice">${{ product.Fprice }}</p>
                  <p class="price">${{ product.price }}</p>
                </section>
                <section class="card">
                  <button>+</button>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["auctionSales"]),
  },
};
</script>

<style scoped>
</style>
