<template>
  <div id="header">
     <div class="navbar center">
        <h1>Vue store</h1>
        <nav>
            <ul>
                <div v-if="Home">
                  <li><router-link to="/home" class="link">Home</router-link></li>
                </div>
               <div v-if="Auction">
                  <li><router-link to="/auction" class="link">Auctions</router-link></li>
               </div>
               <div v-if="Contact">
                  <li><router-link to="/contact" class="link">Contact</router-link></li>
               </div>

              <div  class="horizontal">
                <div v-if='isLoggedIn'>
                  <button class="btn-h submit-btn" @click.prevent='routing_nav("Logout")'>{{Logout}}</button>
                </div>
                <div else>
                  <button class="btn-h submit-btn" @click.prevent='routing_nav("Login")'>{{Login}}</button>
                  <button class="btn-h submit-btn" @click.prevent='routing_nav("Register")'>{{Register}}</button>
                </div>
              </div>
            </ul>
        </nav>
     </div>

  </div>
</template>

<script>
export default {
  props:{
    Home: Boolean,
    Auction: Boolean,
    Contact: Boolean,
    Login: String,
    Register: String,
    Logout: String,
    routing: Function,
  },
  data () {
    return {
      isLoggedIn: false,
      isregistered: false,
    }
  },
  methods:{
    routing_nav(value){
      if(this.Login == value ){
         if(!(this.$route.path == '/')){
            this.$router.push("/")
         }
      }else if(this.Lougout == value){
         if(!(this.$route.path == '/logout')){
           console.log("logged out boy")
            // this.$router.push("/logout")
          }
      }else if(this.Register == value){
        if(!(this.$route.path == '/register')){
          this.$router.push("/register")
        }
      }
    },
    fetch
  },
  mounted:{

  }
}
</script>

<style scoped>


</style>
