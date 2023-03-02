<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leider"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar flat color="background">
    <v-container class="d-flex justify-space-around">
      <span class="hidden-sm-and-up">
        <v-btn icon @click.stop="drawer = !drawer"
          ><v-icon size="large" color="secondary">mdi-menu</v-icon></v-btn
        >
      </span>

      <v-app-title class="d-flex">
        <router-link id="app-bar-title-logo" class="d-flex" to="/">
          <img class="d-flex align-center" src="../../assets/Fichier_18.svg" />
        </router-link>
      </v-app-title>

      <div
        class="border hidden-sm-and-down align-center ml-8 rounded rounded-xl w-100 d-sm-flex justify-space-around"
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

      <v-app-bar-action>
        <v-btn size="small" icon variant="outlined" class="btn" to="/qsd"
          ><v-icon>mdi-account</v-icon></v-btn
        >
      </v-app-bar-action>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref<boolean | null>(null)

const links = ref()
</script>
