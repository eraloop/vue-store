<template>
    <div id="form" class="form-container-size form-container">
        <section class="header">
            <h1>{{ Text }}</h1>
            <h3>Already have an account? {{ linkText }} Instead</h3>
        </section>
        <form action="">
            <div v-if="Name">
                <label for="name">Name</label><br />
                <input
                    type="text"
                    name="name"
                    v-model="name"
                    :rules="[NameRules]"
                    class="input"
                />
            </div>
            <div v-if="Email">
                <label for="email">Email</label><br />
                <input type="email"  class="input" name="email" required v-model="email" />
            </div>
            <div v-if="Address">
                <label>Address</label><br />
                <input
                    type="text"
                    name="address"
                    class="address input"
                    required
                    v-model="address"
                />
            </div>
            <div v-if="Tel">
                <label>Tel.</label><br />
                <input
                    type="text"
                    name="tel"
                    class="tel input"
                    required
                    v-model="tel"
                />
            </div>
            <div v-if="Gender">
                <label>Gender</label><br />
                <select class="options" v-model="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div v-if="Password">
                <label>Password</label><br />
                <input
                    type="password"
                    name="password"
                    class="password input"
                    required
                    v-model="password"
                />
            </div>
            <div v-if="Cpassword">
                <label> Confirm Password</label><br />
                <input
                    type="password"
                    name="conpassword"
                    class="conpassword input"
                    required
                    v-model="cpass"
                />
            </div>
            <div v-if="CCN">
                <label for="card">CCN</label><br />
                <input type="number" class="input" name="card" required v-model="ccn" />
            </div>
            <div v-if="TandC">
                <span><input type="checkbox" class="checkbox" v-model="tandc" /></span>
                <span for=""><a>  Accept our Terms and conditions?</a></span>
            </div>
            <div>
                <button
                    class="btn submit-btn"
                    @click.prevent="routing(`${Text}`)"
                    :disabled="disable"
                >
                    {{ Text }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        Text: String,
        linkText: String,
        Name: Boolean,
        Email: Boolean,
        Tel: Boolean,
        Gender: Boolean,
        Password: Boolean,
        Cpassword: Boolean,
        CCN: Boolean,
        TandC: Boolean,
        Address: Boolean,
        routing: Function,
        regFormCheck: Function,
    },
    data() {
        return {
            name: "",
            email: "",
            address: "",
            tel: "",
            password: "",
            cpass: "",
            ccn: "",
            gender: "",
            tandc:"",
            disable: false,
            NameRules: [(v) => !!v || "First Name is required"]
        }
    },
    computed:{
        regFormCheck: function(){
            return (this.name == "" || this.email == ""||this.tel == ""||
                    this.address == "" || this.password == "" || this.cpassword == "" ||
                    this.tandc == "" ) ? true:false
        }
    },
    methods: {
        routing: function(value) {
            if (value == "Register") {
                const payload ={
                    username : this.name,
                    email : this.email,
                    password : this.password
                }
                console.log(payload)
                this.$store.dispatch("registerUser", payload )
                this.$router.push("/")
            } else if (value == "Login") {
                const payload= {
                    email : this.email,
                    password : this.password
                }
                this.$store.dispatch("loginUser", payload)
                this.$router.push("/home")
            }
        },

        toogleDisable(regForCheck){
            if(regForCheck == true){
                this.disable = true
            }
            this.disable = false
        },
        // regFormCheck: function(){
        //     return (this.name == "" || this.email == ""||this.tel == ""||
        //             this.address == "" || this.password == "" || this.cpassword == "" ||
        //             this.tandc == "" ) ? true:false
        // }

    }
}
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 2em 0;
}
.header h1 {
    font-size: 1.5em;
}

.header h3 {
    color: #999;
}
.form-container {
    margin: 5em auto;
    width: 45%;
}
.terms {
    display: flex;
    justify-content:center;
    align-items: left;
    color: #1dbf73;
}
.checkbox {
    padding: 0;
    margin: 0;
    align-self: left;
    justify-self: left;
}
</style>
