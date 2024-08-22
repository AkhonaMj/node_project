import { createStore } from 'vuex'
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
import axios from 'axios'

const apiURL = "https://node-project-xlvk.onrender.com/"
// https://nodejseomp-vow4.onrender.com
// https://node-project-xlvk.onrender.com/
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setSingleUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setSingleProduct(state, value) {
      state.product = value;
    },
  },
  actions: {
    async fetchProducts(context) {
      try {
        const results = await (await axios.get(`${apiURL}products`)).data
        if (results) {
          context.commit('setProducts', results)
        } else {
console.log("error")
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }

    },

  
    async fetchProduct(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}product/${id}`)).data
        if (result) {
          context.commit('setProduct', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async addAProduct(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}product/add`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateProduct(context, payload) {
      try {
        const { msg } = await (await axios.patch(`${apiURL}product/${payload.productID}`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteProduct(context, id) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}product/${id}`)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    }

  },
  modules: {
  }
})
