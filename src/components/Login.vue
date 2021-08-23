<template>
  <main>
    <app-navbar Login="Login" Register="Register" Logout = "Logout" routing_nav></app-navbar>
    <app-form Text="Login" :Email="true" :Password ="true"  linkText="Register" routing></app-form>
  </main>
</template>

<script>
import Form from './FormFields'
import Navbar from './Header'
export default {
    components:{
        "app-form": Form,
        "app-navbar": Navbar,
    },

  data () {
    return {
     form:{
        email: "",
        password:""
      },

    }
  },

  methods:{
  },
}
</script>

<style scoped>



.header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 2em 0;
}
.header h1{
  font-size: 1.5em;
}

.header h3{
  color: #666;
}
.log-container{
    margin: 5em auto;
    width: 50%;
}

</style>
