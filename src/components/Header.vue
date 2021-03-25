<template>
  <div id="header">
     <div class="container center">
        <h1>Vue store</h1>
        <nav>
            <ul>
                    <li><router-link to="/" class="link">Home</router-link></li>
                    <li><router-link to="/auction" class="link">Auctions</router-link></li>
                    <li><router-link to="/contact" class="link">Contact</router-link></li>
                    <button class="btn-h">Register</button>
            </ul>
        </nav>
     </div>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

#header{
    background:#1849D6;
    height: 50px;
    width: 100%;
    padding: 10px 0;
    color: white;
}

.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.container ul li{
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
}
.link{
  text-decoration: none;
  color: #fff;
}
.link:hover{
  color: #47f3a3;
}

.container h1{
    font-size: 1.2em;
    color: #47f3a3;
}

.btn-h{
  padding: 10px;
  color:white;
  border: 0;
  border-radius: 25px;
  background: #1DBF73;
  margin-left: 2em;
  outline: 0;
  cursor: pointer;
}

.btn-h:hover{
  background: #47f3a3;
  transition: .2s ease-in-out;
}


</style>
