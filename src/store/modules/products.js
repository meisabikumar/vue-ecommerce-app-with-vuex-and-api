import axios from "axios";
const END_POINT = "http://localhost:5000/products";

export default {
  state: {
    products: [],
    product: {},
  },
  getters: {
    allProducts: (state) => state.products,
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
      const response = await fetch(`${END_POINT}/${productId}`);
      console.log(response.data);
      commit("setProduct", response.data);
    },

    // getProduct({ commit }, productId) {
    //   Product.show(productId).then((response) => {
    //     commit("SET_PRODUCT", response.data);
    //   });
    // },
  },
};
