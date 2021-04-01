<template>
  <div id="product" class="center products">
    <h1>Available Products</h1>

    <div class="productListing">


      <div class="generalProducts">
        <h2 class="sectionTitle"><span>Featured</span> products</h2>
        <div class="productView">
                  
        <div class="product" v-for="product in SaleProducts.generalProducts" :key= "product.name">
         
            <div class="head">
            <img :src="product.image" alt="" />
            <p></p>
          </div>
          <div class="details">
            <section class="product-name">
              <router-link class="link" to="/product">
                <h2>{{ product.name }}</h2>
              </router-link>
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
                <button @click="addToCard(product)"  class="cardbutton">+</button>
              </section>
            </section>
            
          </div>
          
        </div>
        </div>
      </div>
  
  <!-- male products -->

      <div class="maleProducts">
        <h2 class="sectionTitle"><span>Male</span> products</h2>

        <div class="productView">
        
        <div class="product" v-for="product in SaleProducts.maleProducts" :key= "product.name">
          <div class="head">
            
            <img :src="product.image" alt="" />
            <p></p>
          </div>
          <div class="details">
             <section class="product-name">
              <router-link class="link" to="/product">
                <h2>{{ product.name }}</h2>
              </router-link>
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
                <button @click="addToCard(product)" class="cardbutton">+</button>
              </section>
            </section>
          </div>
        </div>
        </div>
      </div>

      <!-- female products -->

      <div class="femaleProducts">
        <h2 class="sectionTitle"><span>Female</span> products</h2>
        <div class="productView">
          
          <div class="product" v-for="product in SaleProducts.femaleProducts" :key= "product.name">
            <div class="head">
              <img :src="product.image" alt="" />
              <p></p>
            </div>
            <div class="details">
              <section class="product-name">
                <router-link class="link" to="/product">
                  <h2>{{ product.name }}</h2>
                </router-link>
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
                  <button @click="addToCard(product)" class="cardbutton">+</button>
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
// import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["SaleProducts", "cardItems"]),
  },
  methods:{
    addToCard(product){
      this.$store.dispatch('addToCard',{
        product: product,
        quantity : 1
      })
    }
  }
};
</script>




<style scoped>

.product router-link{
  list-style-type:none;
  text-decoration: none;
  color: red;
}


.sectionTitle{
  font-size: 1.2em;
  color: #666;
  padding: 1.5em 0;
}
.sectionTitle span{
  font-size: 1em;
  font-weight: 900;
  color: #1dbf73;
  text-decoration: underline;
}


</style>
