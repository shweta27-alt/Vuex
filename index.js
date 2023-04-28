import { Vue} from 'vue'
import { createStore } from 'vuex'
import Vuex from 'vuex'
import products from "./modules/products"

Vue.use(Vuex);

export default createStore({
  modules: {
    products
  }
})
