import axios from "axios";
const END_POINT = "http://localhost:5000/products";

export default {
  state: {
    products: [],
    product: null,
  },
  getters: {
    allProducts: (state) => state.products,
    product: (state) => state.product,
  },
  mutations: {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.product = product),
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get(`${END_POINT}`);
      console.log(response.data);
      commit("setProducts", response.data);
    },

    async fetchProduct({ commit }, productId) {
      const response = await axios.get(`${END_POINT}/${productId}`);
      console.log(response.data);
      commit("setProduct", response.data);
    },
  },
};
