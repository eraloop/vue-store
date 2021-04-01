<template>
  <div id="card">
    <div v-if="cardItems.cardLength != 0">
        <span class="count">{{cardItems.cardLength}}</span>
        <router-link to="/checkout"> <button class="cardbutton float">C</button></router-link>
    </div>
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
  }
};
</script>

<style scoped>
#card{
    position: fixed;
    bottom: 300px;
    right: 30px;
}
button {
    font-size: 30px;
    height: 50px;
    width: 50px;
    color:#fff;
}

.count{
    position: relative;
    top: -20px;
    left: 20px;
    font-size: 20px;
    color: #1849D6;
    font-weight: 700;
    background: #fff;
    padding: 2px 8px;
    border-radius: 25px;
    border: 0;
    cursor: pointer;
}
</style>
