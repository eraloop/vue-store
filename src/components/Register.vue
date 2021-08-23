<template>
<main>
    <app-navbar Login="Login" Register="Register" Logout = "Logout" routing_nav regFormCheck></app-navbar>
    <app-form
        Text="Register" :Name="true" :Password ="true"
        linkText="Login" routing :Address="true"
        :Gender="true" :Tel="true" :Cpassword="true" :Email="true" :TandC="true"
    >
    </app-form>
</main>
</template>

<script>
import Form from './FormFields'
import Navbar from './Header'
export default {
    components:{
        "app-form": Form,
        "app-navbar": Navbar
    },
  data () {
    return {

    }
  },
  methods:{
    // route_lg(){
    //     if(this.form.name == ""){
    //         document.querySelector('.name').classList.add("error")
    //         document.querySelector('.email').classList.add("error")
    //         document.querySelector('.address').classList.add("error")
    //         document.querySelector('.tel').classList.add("error")
    //         document.querySelector('.password').classList.add("error")
    //     }else if(this.form.password != this.form.conpassword){
    //         document.querySelector('.conpassword').classList.add("error")
    //     }
    //     else{
    //         this.$router.push("/")

    //     }

    // },

  },
}
</script>

<style scoped>

.error{
    color: red;
    border:1px red;
    border-bottom-style: solid;
}
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

.reg-container{
    margin: 5em auto;
    width: 50%;
}

</style>
