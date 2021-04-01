<template>
    
        <div id="register" class="reg-container form-container-size ">
            <section class="header">
                <h1>Register</h1>
                <h3>Already have an account?  <button @click.prevent="route()" class="link-btn">Login instead</button></h3>
            </section>
            <section class="form-section">
            <form action="">
                <div>
                    <label > Full Name</label><br />
                    <input 
                    type="text" 
                    name="name" 
                    required 
                    :rules="NameRules"
                    v-model="form.name"
                    class="name"
                    />
                </div>
                <div >
                    <label>Email</label><br />
                    <input
                    type="text"
                    name="email"
                    class="email"
                    required
                    v-model="form.email"
                    />
                </div>
                <div>
                    <label >Address</label><br />
                    <input
                    type="text"
                    name="address"
                    class="address"
                    required
                    v-model="form.address"
                    />
                </div>
                <div>
                    <label >Tel.</label><br />
                    <input
                    type="text"
                    name="tel"
                    class="tel"
                    required
                    v-model="form.tel"
                    />
                </div>
                 <div>
                    <label >Gender</label><br />
                    <select class="options" v-model="form.gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                 <div>
                    <label >Password</label><br />
                    <input
                    type="password"
                    name="password"
                    class="password"
                    required
                    v-model="form.password"
                    />
                </div>
                 <div>
                    <label > Confirm Password</label><br />
                    <input
                    type="password"
                    name="conpassword"
                    class="conpassword"
                    required
                    v-model="form.conpassword"
                    />
                </div>
                
                <div>
                    <input @click.prevent="route_lg()" class="submit-btn"  type="submit" value="Register">
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
            name:"" ,
            email: "",
            address:"",
            tel:"",
            gender:"",
            password:"",
            conpassword: ""
        },

        NameRules: [(v) => !!v || "First Name is required"],
     
    }
  },
  methods:{
    route_lg(){
        if(this.form.name == ""){
            document.querySelector('.name').classList.add("error")
            document.querySelector('.email').classList.add("error")
            document.querySelector('.address').classList.add("error")
            document.querySelector('.tel').classList.add("error")
            document.querySelector('.password').classList.add("error")
        }else if(this.form.password != this.form.conpassword){
            document.querySelector('.conpassword').classList.add("error")
        }
        else{
            this.$router.push("/")
            
        }
      
    },
    route(){
        this.$router.push("/")
    }

    
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
