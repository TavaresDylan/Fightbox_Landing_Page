<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <v-main>
        <router-view />
      </v-main>
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script setup lang="ts">
import Header from "@/shared/layout/Header.vue";
import Footer from "@/shared/layout/Footer.vue";
</script>

<style>
body {
  background-color: #ffe2cb;
}
.router-links {
  text-decoration: none;
  transition: 0.3s;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
}
.router-links:hover {
  color: blue;
  transition: 0.3s;
}
</style>
