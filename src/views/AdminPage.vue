<template>

  <AdminPanel v-if="token" />

  <AdminAuthentication v-else />

</template>

<script setup>

  import AdminAuthentication from "../components/AdminAuthentication.vue";
  import AdminPanel from "../components/AdminPanel.vue";

  let token = sessionStorage.getItem("token");

</script>

<script>
  export default {
      name: "AdminPage"
  }
</script>
