<template>
  <Header />
  <div class="container"><router-view /></div>
  <NotificationsList />
</template>

<script>
import Header from "./components/Header.vue";
import NotificationsList from "./components/notification/NotificationsList.vue";
export default {
  components: {
    Header,
    NotificationsList,
  },
};
</script>

<style>
</style>
