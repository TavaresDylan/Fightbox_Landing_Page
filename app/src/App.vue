<script setup></script>

<template>
  <div id="app">
    <v-app>
      <v-app-bar flat color="background">
        <v-container class="d-flex justify-space-between">
          <div class="d-flex">
            <router-link id="app-bar-title-logo" class="d-flex" to="/">
              <img class="d-flex align-center" src="./assets/Fichier_18.svg" />
            </router-link>
          </div>

          <div
            class="border d-flex align-center w-100 ml-8 rounded justify-space-around"
          >
            <router-link class="router-links" to="/abonnements"
              >Abonnements</router-link
            >
            <router-link class="router-links" to="/cartes-cadeaux"
              >Cartes cadeaux</router-link
            >
            <router-link class="router-links" to="/notre-histoire"
              >Notre histoire</router-link
            >
          </div>
        </v-container>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<style>
body {
  background-color: #ffe2cb;
}
#app-bar-title-logo {
  width: 120px;
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
