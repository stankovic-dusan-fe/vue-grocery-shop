import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: 'Fine steak',
          price: '2.30',
          unit: 'kg',
          quantity: 0,
          description: 'Top quality wagyu beef, grass fed',
          image: 'fine-stake'
        },
        {
          id: 2,
          name: 'Tasty bread',
          price: '2.30',
          unit: 'pcs',
          quantity: 0,
          description: 'Fluffy and fresh, made for your favourite cream',
          image: 'tasty-bread'
        },
        {
          id: 3,
          name: 'Choco milk',
          price: '2.30',
          unit: 'pcs',
          quantity: 0,
          description: 'Made by brown cows',
          image: 'choco-milk'
        },
        {
          id: 4,
          name: 'Tomatoes',
          price: '2.00',
          unit: 'kg',
          quantity: 0,
          description: 'Fresh, ripe, ready for a salad',
          image: 'tomatoes'
        },
        {
          id: 5,
          name: 'Olive oil',
          price: '5.42',
          unit: 'pcs',
          quantity: 0,
          description: 'Genco Pura Olive Oil Company ',
          image: 'olive-oil'
        },
        {
          id: 6,
          name: 'Bananas',
          price: '2.30',
          unit: 'kg',
          quantity: 0,
          description: 'Imported directly from Banana republic',
          image: 'bananas'
        }
      ],
      cart: [],
      cartTotal: 0
    }
  },
  actions: {
    addToCart(product) {
      let inCart = false

      this.cart.forEach((el) => {
        if (el.id === product.id) inCart = true
      })

      if (inCart === false) {
        this.cart.push(product)
        product.quantity = 1
      } else product.quantity++
    },
    removeFromCart(product) {
      let productIndex = this.cart.indexOf(product)
      this.cart.splice(productIndex, 1)
      product.quantity = 0
    },
    reduceQuantity(product) {
      product.quantity--
    },
    addToFavorite(product) {
      product.favorite = !product.favorite
    },
    getProductImg(image) {
      return new URL(image, import.meta.url).href
    }
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
    getFavoritesProducts: (state) => {
      return state.products.filter((product) => product.favorite === true)
    }
  }
})
