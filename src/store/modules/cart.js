import axios from "axios";
const END_POINT = "http://localhost:5000/cart";

export default {
  state: {
    cart: [],
  },
  getters: {
    getCartItems: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,
    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      return total;
    },
  },
  mutations: {
    setCart: (state, cart) => (state.cart = cart),
    addProductToCart: (state, item) => {
    //   state.cart.push({
    //     product,
    //     quantity,
    //   });

      state.cart.push(item);
    },
    removeProductFromCart: (state, productId) => (state.cart = state.cart.filter((item) => item.product.id !== productId)),
    clearCartItems: (state) => (state.cart = []),
  },
  actions: {
    async fetchCartItems({ commit }) {
      const response = await axios.get(`${END_POINT}`);
      console.log(response.data);
      commit("setCart", response.data);
    },

    async addProductToCart({ commit, dispatch, state }, { product, quantity }) {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });

      if (productInCart) {
        quantity = quantity + productInCart.quantity;
        productInCart.quantity = quantity;
        const response = await axios.put(`${END_POINT}/${productInCart.id}`, { product, quantity });
        console.log("update cart", response.data);

        dispatch(
          "addNotification",
          {
            type: "success",
            message: "Product Updated to cart.",
          },
          { root: true }
        );
      } else {
        const response = await axios.post(`${END_POINT}`, { product, quantity });
        commit("addProductToCart", response.data);
        console.log("created", response.data);

        dispatch(
          "addNotification",
          {
            type: "success",
            message: "Product added to cart.",
          },
          { root: true }
        );
      }
    },

    async removeProductFromCart({ commit, dispatch }, item) {
      await axios.delete(`${END_POINT}/${item.id}`);
      commit("removeProductFromCart", item.product.id);

      dispatch(
        "addNotification",
        {
          type: "success",
          message: "Product removed from cart.",
        },
        { root: true }
      );
    },

    async clearCartItems({ commit, dispatch, state }) {
      state.cart.forEach((item) => axios.delete(`${END_POINT}/${item.id}`));
      commit("clearCartItems");
      dispatch(
        "addNotification",
        {
          type: "success",
          message: "All products removed from cart.",
        },
        { root: true }
      );
    },
  },
};
