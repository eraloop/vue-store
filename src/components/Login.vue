<template>

    <div id="login" class="log-container form-container-size">
      <section class="header">
        <h1>Login</h1>
        <h3>Don't have an account?. <button @click.prevent="route_reg()" class="link-btn">Register</button></h3>
      </section>
      <section class="form-section">
        <form action="">

          <div >
            <label for="email">Email</label><br />
            <input
              type="text"
              name="email"
              required
              :rules="NameRules"
              v-model="form.email"
            />
          </div>
          <div>
            <label for="card">Password</label><br />
            <input
              type="password"
              name="password"
              required
            
              v-model="form.password"
            />
          </div>
          <div>
            <input @click.prevent="route()"  class="submit-btn" type="submit" value="Login">
          </div>
        </form>
      </section>
  </div>
</template>

<script>
import Form from './Form'
export default {
    components:{
        "app-form": Form
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
    route(){
      this.$router.push("/home")
    },
    route_reg(){
      this.$router.push("/register")
    },

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

