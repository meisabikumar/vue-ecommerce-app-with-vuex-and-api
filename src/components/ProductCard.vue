<template>
  <div class="col-3 mt-3">
    <div class="card h -100 text-left">
      <img class="w-100" src="https://via.placeholder.com/150x100" alt />
      <div class="card-body">
        <h4 class="card-title">
          <a href="#"> Product title </a>
        </h4>
        <strong>$23</strong>
        <p class="card-text">Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>

<style>
</style>