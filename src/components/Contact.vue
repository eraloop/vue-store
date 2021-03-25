<template>
  <div id="contact">

    <h1>Contact page</h1>
    <h1 v-bind="id">{{id}}</h1>
     
   
  </div>
</template>

<script>
export default {
  data () {
    return {
     id: this.$route.params.id
    }
  }
}
</script>

<style scoped>



</style>
