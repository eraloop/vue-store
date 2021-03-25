<template>
  <div id="featured-products">
      <div class="container ">
        <h3>Featured:  </h3>
        <div class="fetured-category ">
          <ul >
            <li v-for="category in featuredProducts" :key= "category">
              <p>{{category}}</p>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'


export default {
  data () {
    return {
     
    }
  },

  computed:{

    ...mapGetters([
      "featuredProducts"
    ]),

  },

}
</script>


<style scoped>

ul li{
    display: inline-block;
    padding: 0 1em;
    opacity: 0.4;
    text-decoration: none;
}
.container{
  display: flex;
  justify-content: center;
  border-bottom: 2px  solid #d3d3d3;
  border-top: 2px  solid #d3d3d3;
  padding: 10px ;
  margin-bottom: 2em;
}

.container h3{
  color: #666;
  font-size: 16px;
  padding-left: 10px;
}



</style>
