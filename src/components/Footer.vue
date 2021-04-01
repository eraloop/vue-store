<template>
  <div id="footer">

    <section class="footer-company">
        <p>&copy; vue store 2021. All Rights Reserved</p>
    </section>
   
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


#footer{
    background:#1849D6;
    height: auto;
    width: 100%;
    /* padding: 1em 2em; */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#footer p{
  font-size: 20px;
}

.footer-company{
  padding: 2em 0 ;
  border-top: 3px solid #092a8b;
  width: 100%;
  margin: auto;
  text-align: center;
}



</style>
