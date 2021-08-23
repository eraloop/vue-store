<template>
  <div id="form" class="container">
    <form action="">

          <div v-if="name">
            <label for="name">Name</label><br />
            <input
            type="text"
            name="name"
            required
            v-model="form.name"
             />
          </div>
          <div >
            <label for="email">Email</label><br />
            <input
              type="text"
              name="email"
              required
              v-model="form.email"
            />
          </div>
          <div>
            <label for="card">CCN</label><br />
            <input
              type="number"
              name="card"
              required
              v-model="form.ccn"
            />
          </div>
          <div>
            <input @click.prevent="submitbtn()" class="submit-btn" v-model="submittext" type="submit">
          </div>
        </form>
  </div>
</template>

<script>
export default {
  props:{
    Name: Boolean,
  },
  data () {
    return {
        isTrue: false,
        form:{
            name:"" ,
            email: "",
            ccn:""
        },
    }
  },
  methods:{
    submitbtn(){
        console.log(this.form)
        this.form= ""
        this.submittext = "submitted.."
    }
  }
}
</script>

<style scoped>


</style>
