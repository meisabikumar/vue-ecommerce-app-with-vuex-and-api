<template>
  <div class="container">
    <!-- <h1>Home View</h1> -->
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    ProductList,
  },
};
</script>
