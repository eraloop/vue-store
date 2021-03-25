<template>
  <div id="product" class="center products">
    <h1>Available Products</h1>

    <div class="productListing">


      <div class="generalProducts">
        <h2 class="sectionTitle"><span>Featured</span> products</h2>
        <div class="productView">
                  
        <div class="product" v-for="product in SaleProducts.generalProducts" :key= "product">
          <router-link to="/product">
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
                <button @click="addToCard()"  class="cardbutton">+</button>
              </section>
            </section>
            
          </div>
          </router-link>
        </div>
        </div>
      </div>
  
  <!-- male products -->

      <div class="maleProducts">
        <h2 class="sectionTitle"><span>Male</span> products</h2>

        <div class="productView">
        
        <div class="product" v-for="product in SaleProducts.maleProducts" :key= "product">
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
                <button @click="addToCard()" class="cardbutton">+</button>
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
          
          <div class="product" v-for="product in SaleProducts.femaleProducts" :key= "product">
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
                  <button @click="addToCard({product})" class="cardbutton">+</button>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="item in cardItems.cardItems" :key="item.product.name">
      <p>{{item.product.name}}</p>
      <p>{{item.quantity}}</p>
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
        product,
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

/* .product-name{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
} */

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


/* .products {
  padding: 1em;
  width: 80%;
  margin: auto;
} */

/* .productListing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

/* .generalProducts, .maleproducts, .femaleProducts{
  margin: 1em 0;
} */

/* .productView {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2em;
  grid-column-gap: 1em;
} */

/* .products h1 {
  font-size: 1.6em;
  color: #1dbf73;
  text-align: center;
} */


/* .product {
  height: auto;
  width: 250px;
  border-radius: 5px;
  box-shadow: 1px 2px 15px 2px #d3d3d3;
} */
/* 
.product .head img {
  height: 200px;
  width: 100%;
}

.product .details h2 {
  font-size: 1.1em;
  color: #666;
}

.product .details {
  padding: 10px;
}
.details .description {
  color: #666;
  opacity: 0.5;
  font-size: 16px;
}
.percent{
  color: #E62231;
  font-weight: bold;
  padding: 10px 0 0;
}
.price-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  font-family: "montserrat";
}
.prices {
  display: flex;
  justify-content: center;
  align-items: center;
}
.prices span {
  font-weight: 700;
  color: #666;
  padding-right: 10px;
}

.prices .Fprice {
  text-decoration: line-through;
  opacity: 0.4;
}

.prices .price {
  color: #1dbf73;
  padding: 0 5px;
  font-weight: 1000;
  font-size: 1em;
  text-decoration: underline;
}

.card button {
  padding: 7px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 0;
  background: #1dbf73;
  color: white;
  outline: none;
  font-weight: 700;
  font-size: 25px;
} */
</style>
