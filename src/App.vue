<template>
  <div>
    <Navbar />
    <nav v-if="userStore.loadingSession === false">
      <router-link to="/" v-if="userStore.userData">Home</router-link> |
      <router-link to="/login" v-if="!userStore.userData">Login</router-link> |
      <router-link to="/register" v-if="!userStore.userData"
        >Register</router-link
      >
      |
      <button @click="userStore.logoutUser" v-if="userStore.userData">
        Logout
      </button>
    </nav>
    <div v-else>loading user...</div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { useUserStore } from "./stores/user";
const userStore = useUserStore();

userStore.currentUser();
</script>
