<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <!-- <img class="w-100" src="https://via.placeholder.com/150x100"  /> -->
      <div class="product_img">
        <img class="img" :src="product.image" alt />
      </div>
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product.id } }">{{
            product.title
          }}</router-link>
        </h4>
        <strong>${{ product.price }}</strong>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCart()">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "ProductCard",
  props: ["product"],
  methods: {
    ...mapActions(["addProductToCart"]),
    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
.product_img {
  margin: auto;
  height: 250px;
}
.product_img .img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>