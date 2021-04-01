<template>
  <div id="app">
    <app-view></app-view>
  </div>
</template>

<script>
import MainView from "./components/MainView"

export default {

  components:{
    "app-view": MainView,
  },

  data () {
    return {
     
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 18px;
}

.link-btn{
  border: 0;
  color: #1DBF73;
  text-decoration: underline;
  font-weight: 500;
  font-size: 1em;
  background: none;
  outline: none;
}

button{
  cursor: pointer;
}
.container{
  padding: 4em 0;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: 5em;
}

h1,h2,h3,h4,h5{
  font-family: "poppins";
}

p, span, small {
 font-family: "Roboto", "Open sans";
}
.center{
  width: 85%;
  margin: auto;
}
.btn{
    color: white;
    padding: 13px 25px;
    border-radius: 25px;
    font-size: 20px;
    margin: 1em 0;
    cursor: pointer;
    transition:.2s ease-in-out;
    outline: 0;
}
.btn-pr{
    border: 0;
    background: #1DBF73;
}
.btn-pr:hover{
    background: #48eb9f;
}
.btn-sr{
    border: 1.5px solid #1DBF73;
    color: #1DBF73;
    margin: 1em;
}
.btn-sr:hover{
    background: #1DBF73;
    color: white;
}

/* product card  style section */

.generalProducts, .maleproducts, .femaleProducts{
  margin: 1em 0;
}

.productView {
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2em;
  grid-column-gap: 1em;
}

.products {
  padding: 1em;
  width: 80%;
  margin: auto;
} 

.products h1 {
  font-size: 1.6em;
  color: #1dbf73;
  text-align: center;
}

.product-name{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
}

.product {
  height: auto;
  width: 250px;
  border-radius: 5px;
  box-shadow: 1px 2px 15px 2px #d3d3d3;
}


.product .head img {
  height: 200px;
  width: 100%;
}

.product .details h2 {
  font-size: 1.1em;
  color: #666;
}

.product .details {
  padding: 10px;
}
.details .description {
  color: #666;
  opacity: 0.5;
  font-size: 16px;
}
.percent{
  color: #E62231;
  font-weight: bold;
  padding: 10px 0 0;
}
.price-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  font-family: "montserrat";
}
.prices {
  display: flex;
  justify-content: center;
  align-items: center;
}
.prices span {
  font-weight: 700;
  color: #666;
  padding-right: 10px;
}

.prices .Fprice {
  text-decoration: line-through;
  opacity: 0.4;
}

.prices .price {
  color: #1dbf73;
  padding: 0 5px;
  font-weight: 1000;
  font-size: 1em;
  text-decoration: underline;
}

.cardbutton {
  padding: 7px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 0;
  background: #1dbf73;
  color: white;
  outline: none;
  font-weight: 700;
  font-size: 25px;
}


/* form style section  */
.submit-btn{
  border-style: none;
  background: #666;
  color: #fff;
  font-weight: 500px;
  cursor: pointer;
}

.options{
  display: inline-block;
  width: 400px;
  padding: 10px;
}

form{
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow:1px 2px 15px 2px #d3d3d3;
}

form div{
  padding: 10px;
}
form div label{
  padding: 5px 0;
}

input{
  display: inline-block;
  padding: 10px;
  color: green;
  outline: none;
  width: 400px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style:ridge;
}
</style>
