<template>
  <div class="row mt-5" v-if="product">
    <div class="col-4">
      <img :src="product.image" class="w-100" />
    </div>
    <div class="col-8">
      <h1>{{ product.title }}</h1>
      <h3>${{ product.price }}</h3>

      <input
        type="text"
        v-model.number="quantity"
        class="text-center col-1 me-2 p-1"
      />
      <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>

      <p class="mt-4">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(["fetchProduct"]),
  },
  computed: {
    ...mapGetters(["product"]),
    // ...mapState(["product"]),
  },
  created() {
    this.fetchProduct(this.id);
  },
};
</script>

<style>
</style>