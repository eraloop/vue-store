<template>
  <div id="checkout">
    <div class="container center">

        <h1>single PAGE HERE</h1>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
