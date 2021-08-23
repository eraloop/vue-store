<template>
  <div id="hero-section">
      <div class="container center">
          <section class="hero-text">
              <h1>The  <br> world's largest <br> Vue store</h1>
              <button class=" btn btn-pr">Explore</button>
              <button class=" btn btn-sr">Membership</button>
          </section>
          <section class="img">
              <img src="../assets/logo.png" alt="vue logo img">
          </section>
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
.background{
    /* background: url("../src/assets/logo.png"); */
    height: 100%;
    width: 100%;
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
}

#hero-section{
    background:#1849D6;
    /* background: url("../../src/assets/logo.png"); */
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
}

.container{
    display: grid;
    grid-template-columns:1fr ;
    grid-gap: 1em;
    align-items: center;
    justify-content: center;
}

.container h1{
    color: white;
    font-weight: 700;
    text-align: left;
    font-size: 3em;
}


.img{
    display: flex;
    align-items: center;
    justify-content: center;
}
.img img{
    height: 300px;
    width: 300px;
}

/* working styles */
#hero-section{
    background:#1849D6;
    height: 450px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: auto;
}

.container{
    display: grid;
    grid-template-columns: 2fr 1fr ;
    grid-gap: 1em;
}

.container h1{
    color: white;
    font-weight: 700;
    text-align: left;
    font-size: 3em;

}


.img{
    display: flex;
    align-items: center;
    justify-content: center;
}
.img img{
    height: 300px;
    width: 300px;
}


</style>
