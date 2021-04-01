import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        generalProducts: [
            {
                name: "HODDY",
                class: "Wear",
                price: 300,
                image: require('../assets/products/hoody.jpg'),
                description: `
                    this product is a very quality vue product
                `
            },

            {
                name: "SLIPPERS",
                price: 150,
                class: "Foot Wear",
                image: require('../assets/products/slippers.jpg'),
                description: `
                    this product is a very quality vue product
                `
            },

            {
                name: "PULLOVER",
                class: "Wear",
                price: 500,
                image: require('../assets/products/pullover.jpg'),
                description: `
                    this product is a very quality vue product
                    
        
                `
            },
            {
                name: "PANTS",
                price: 30,
                class: "Undies",
                image: require('../assets/products/panst.jpg'),
                description:
                    "  this product is a very quality vue product "
            },
            {
                name: "SINGLETS",
                price: 70,
                class: "inner wear",
                image: require('../assets/products/singlets.jpg'),
                description: `
                    this product is a very quality vue product
                   
        
                `
            },

        ],

        femaleProducts: [
            {
                name: "HANDBAGS",
                category: "female",
                class: "Bag",
                price: 700,
                image: require('../assets/products/handbag.jpg'),
                description: `
                    this product is a very quality vue product

                `
            },
            {
                name: "BLOUS",
                category: "female",
                class: "Wear",
                price: 150,
                image: require('../assets/products/blous.jpg'),
                description: `
                    this product is a very quality vue product
                `
            },
            {
                name: "BRA",
                class: "Wear",
                category: "female",
                price: 40,
                image: require('../assets/products/bra.jpg'),
                description: `
                    this product is a very quality vue product
                `
            },
            {
                name: "HEELS",
                class: "Shoe",
                category: "female",
                price: 400,
                image: require('../assets/products/heels.jpg'),
                description: `
                    this product is a very quality vue product
                `
            },
        ],

        maleProducts: [
            {
                name: "LACOSTE T-SHIRT",
                category: "male",
                color: "Plain red",
                class: "top wear",
                price: 100,
                image: require('../assets/products/lacoste.jpg'),
                description: `
                    this product is a very quality vue product
                   
    
                `
            },
            {
                name: "JEAN JACKET",
                class: "wear",
                category: "male",
                price: 250,
                image: require('../assets/products/jeanjackets.jpg'),
                description: `
                    this product is a very quality vue product
                    
   
                `
            },
            {
                name: "JEANS",
                category: "male",
                class: "Wear",
                price: 200,
                image: require('../assets/products/jeans.jpg'),
                description: `
                    this product is a very quality vue product

                `
            },
            {
                name: "POINTERS",
                class: "Shoe",
                category: "male",
                price: 700,
                image: require('../assets/products/shoe.jpg'),
                description: `
                    this product is a very quality vue product
                    

                `
            },
            {
                name: "SUITCASE",
                class: "Bag",
                category: "male",
                price: 200,
                image: require('../assets/products/suitcase.jpg'),
                description: `
                    this product is a very quality vue product
                    
    
                `
            },
            {
                name: "WRIST WATCH",
                class: "Watches",
                category: "male",
                price: 500,
                image: require('../assets/products/wtch.jpg'),
                description: `
                    this product is a very quality vue product
                    

                `
            },
            {
                name: "SUIT",
                class: "suits",
                category: "male",
                price: 1000,
                image: require('../assets/products/suit.jpg'),
                description: `
                    this product is a very quality vue product

                `
            },
        ],

        feturedProducts: ["Mens top", "Female tops", "Female Blous", "Mens watches",
            "Mens suits", "male Bags", "Female Bags", "singlets", "undies",
            "pullovers"
        ],
        Partners: [
            {
                image: require('../assets/partners/client-1.png')
            },
            {
                image: require('../assets/partners/client-2.png')
            },
            {
                image: require('../assets/partners/client-3.png')
            },
            {
                image: require('../assets/partners/client-4.png')
            },
            {
                image: require('../assets/partners/client-5.png')
            },
            {
                image: require('../assets/partners/client-6.png')
            },
            {
                image: require('../assets/partners/client-7.png')
            },
            {
                image: require('../assets/partners/client-8.png')
            },
        ],
        
        Card: [],

    },

    getters: {
        SaleProducts: state => {
            const maleProducts = state.maleProducts.map(product => {
                return {
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    class: product.class,
                    image: product.image,
                }
            })
            const generalProducts = state.generalProducts.map(product => {
                return {
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    class: product.class,
                    image: product.image,
                }
            })

            const femaleProducts = state.femaleProducts.map(product => {
                return {
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    class: product.class,
                    image: product.image,
                }
            })

            return { femaleProducts, maleProducts, generalProducts };

        },


        auctionSales: state => {
            const maleAuction = state.maleProducts.map(product => {
                return {
                    name: product.name,
                    Fprice: product.price,
                    price: product.price * 0.2,
                    description: product.description,
                    class: product.class,
                    image: product.image,
                    percent: product.price * 0.8
                    // percent: 80
                }
            })
            const femaleAuction = state.femaleProducts.map(product => {
                return {
                    name: product.name,
                    Fprice: product.price,
                    price: product.price * 0.2,
                    description: product.description,
                    class: product.class,
                    image: product.image,
                    percent: product.price * 0.8
                }
            })
            const generalAuction = state.generalProducts.map(product => {
                return {
                    name: product.name,
                    Fprice: product.price,
                    price: product.price * 0.2,
                    description: product.description,
                    class: product.class,
                    image: product.image,
                    percent: product.price * 0.8
                }
            })

            return { generalAuction, femaleAuction, maleAuction };
        },


        storePartners: state => {
            const storePartners = state.Partners.map(partner => {
                return {
                    image: partner.image
                }
            })

            return storePartners;
        },

        featuredProducts: state => {
            const featuredProducts = state.feturedProducts;

            return featuredProducts;
        },
        
        cardItems: state =>{
            const cardItems = state.Card;
            const cardLength = state.Card.length;

            // const cardCost =  state.Card.forEach(item =>{

            //         console.log("card calculated")
            //         // let total = 0
            //         // // total += item.product.price * item.quantity
            //         // console.log(total)
            //         return 0
   
            // })
            const cardCost = state.Card.forEach(item=>{
                let total = 0
                // console.log(item.product.price)
                console.log(item.product.price * item.quantity)
                total += item.product.price * item.quantity
                console.log("total", total)
                return total
            })
           

            return { cardItems, cardLength, cardCost }
        }
        
    },

    mutations: {
        Add_To_Card: (state , {product, quantity})=>{

            let productInCard = state.Card.find(item=>{
                return item.product.name === product.name
            })

            if(productInCard){
                productInCard.quantity += quantity
            }else{

                state.Card.push({
                    product,
                    quantity
                })
            }

          
        }

    },

    actions: {
        addToCard :({commit}, {product, quantity}) =>{
            commit("Add_To_Card", {product, quantity})
        }

    }
})