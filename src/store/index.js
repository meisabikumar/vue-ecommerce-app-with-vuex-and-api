import { createStore } from "vuex";
import products from "./modules/products";
import cart from "./modules/cart";
import notifications from "./modules/notifications";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cart,
    notifications,
  },
});
