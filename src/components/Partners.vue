<template>
  <div id="partners">
     <div class="container center">
       <div class="images-partners">
           <ul >
                <li v-for="partner in storePartners" :key = 'partner'>
                    <img :src="partner.image" alt="image here">
                </li>
           </ul>
       </div>
     </div>
   
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
     
    }
  },
  computed:{
      ...mapGetters([
          "storePartners"
      ])
  }
}
</script>



<style scoped>
.container{
    display: flex;
    flex-direction: row;
    padding: 10px 0;
}

ul li{
    display: inline-block;
    padding: 0 1.7em;
    opacity: 0.2;
}
ul li img{

    height: 30px;
    width: 70px;
}

</style>