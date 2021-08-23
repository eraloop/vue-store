<template>
    <div class="footer-links">
    <section class="footer-content">
      <div class="logo">
          <img src="../assets/logo.png" alt="vue logo img">

      </div >
     <div class="links">
        <div class="resources">
        <h4>Store</h4>
        <ul>
          <li>Mumbai</li>
          <li>New york</li>
          <li>Miami</li>
        </ul>
      </div>
      <div class="resources">
        <h4>Resources</h4>
        <ul>
          <li>Sellers</li>
          <li>Buyers</li>
          <li>wholesalers</li>
          <li>Retailers</li>
        </ul>
      </div>
        <div class="Partners">
        <h4>Partners</h4>
        <ul>
          <li>Gucci</li>
          <li>Calvin Klien</li>
          <li>Versacy</li>
          <li>Louis Vutton</li>
        </ul>
      </div>
        <div class="">
        <h4>Resources</h4>
        <ul>
          <li>Sellers</li>
          <li>Buyers</li>
          <li>wholesalers</li>
          <li>Retailers</li>
        </ul>
      </div>
      <div class="social-links">
         <h4>Social</h4>
        <ul>
          <li>
            <a target="blank" href="www.facebook.com">
            <img src="../assets/icons/facebook-brands.svg" />
            </a>
            </li>
          <li><img src="../assets/icons/instagram-brands.svg" /></li>
          <li><img src="../assets/icons/twitter-brands.svg" /></li>
          <li><img src="../assets/icons/pinterest-square-brands.svg" /></li>
          <li><img src="../assets/icons/google-plus-brands.svg" /></li>
        </ul>
      </div>
     </div>
    </section>
    </div>
</template>

<style scoped>
ul{
  list-style-type: none;
}
li{
  cursor: pointer;
}
li:hover{
  color:#1DBF73 ;
}

li img{
  height: 30px;
  width: 30px;
}

h4{
  color: #1DBF73;
  font-size: 20px;
  margin-bottom: 5px;
}
.footer-links{
    width: 100%;
    background: #1849D6;
}
.footer-content{
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10em;
    max-width: 85%;
    margin: auto;
    justify-content: space-between;
    padding: 1.5em 0;

}
.links{
  display: flex;
  justify-content: space-between;
  margin: auto;
  grid-gap: 2em;
}
.links div{
  padding: 0 1em;
}

ul li{
  padding: 5px 0;
}

.logo{
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-self: flex-start;
}

</style>