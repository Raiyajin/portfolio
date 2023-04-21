<Header/>

<template>
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-indigo-600">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">The page you’re looking for does not exist</p>
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    name: "ErrorPage",
    components: {Header}
}
</script>

<style scoped>

</style>