<template>
  <div class="row">
    <ProductCard
      v-for="product in allProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",
  components: { ProductCard },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style>
</style>