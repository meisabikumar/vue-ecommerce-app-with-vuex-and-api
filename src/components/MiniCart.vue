<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div>
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>Product 1</strong>
          <br />
          1 x 100
        </div>
        <div>
          <a href="#" class="badge bg-secondary">remove</a>
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: Rs. 0</span>
      <a href="#">Clear Cart</a>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "MiniCart",
};
</script>
  
  <style>
</style>