<template>
  <div>
    <h1>Rsbuild with Vue</h1>
    <IButton color="danger">Danger</IButton>
    <IButton color="danger">Danger</IButton>
    <p>Start building amazing things with Rsbuild and Vue 3</p>
  </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Home Page",
});
</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
