<template>
  <div class="row">
    <ProductCard />
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: { ProductCard },
};
</script>

<style>
</style>