<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>
