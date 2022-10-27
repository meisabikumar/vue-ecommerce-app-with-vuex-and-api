<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div v-for="item in getCartItems" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.title }} -{{ item.id }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.product.price }}
        </div>
        <div>
          <a
            href="#"
            class="badge bg-secondary"
            @click.prevent="removeProductFromCart(item)"
            >remove</a
          >
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: ${{ cartTotalPrice }}</span>
      <!-- <a href="#" @click.prevent="clearCartItems()">Clear Cart</a> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions([
      "fetchCartItems",
      "removeProductFromCart",
      "clearCartItems",
    ]),
  },
  computed: {
    ...mapGetters(["getCartItems", "cartTotalPrice"]),
  },
  created() {
    this.fetchCartItems();
  },
};
</script>

<style>
</style>