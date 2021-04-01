<template>
  <div id="checkout">
    <h1>Cart products</h1>
    <div class="">
      <div class="checkout-products">
        <div class="checkout-display">
          <div
            class="product"
            v-for="item in cardItems.cardItems"
            :key="item.product.name"
          >
            <section class="product-control">
              <button class="cardbutton checkout-cancel">x</button>
              <p><span class="muted">Quantity: </span> {{ item.quantity }}</p>
            </section>
            <div class="horizontal">
              <div class="head">
                <img :src="item.product.image" alt="" />
                <p></p>
              </div>
              <div class="details">
                <section class="product-name">
                  <router-link class="link" to="/product">
                    <h2>{{ item.product.name }}</h2>
                  </router-link>
                </section>
                <section class="des">
                  <p class="description">
                    {{ item.product.description }}
                  </p>
                </section>

                <section class="price-section">
                  <section class="prices">
                    <span>Price: </span>
                    <p class="price">${{ item.product.price }}</p>
                  </section>

                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div>
      <h1>Total cost : {{cardItems.cardCost}}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Form from './Form'
export default {
  components:{
    "app-form": Form
  },
  data() {
    return {
      submittext:"submit",  
    };
  },
  computed: {
    ...mapGetters(["cardItems"]),
  },
  methods:{
   
  },
};
</script>

<style scoped>

.checkout-cancel {
  background: none;
  color: red;
  padding: 0px;
  font-weight: 900;
}
.checkout-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}

.horizontal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}

.head img{
  height: 115px;
  width: 115px;
}

.product {
  width: 300px;
}
.product-control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  color: blue;
}
.product-control .muted {
  color: #d3d3d3;
  opacity: 0.4;
}
.checkout-form{
  padding: 10px;
}
.checkout-form h1{
  font-size: 20px;
  color: #666;
}
.checkout-form p{
  color: #777;
  font-size: 14px;
  margin-bottom: 20px;
}

</style>

