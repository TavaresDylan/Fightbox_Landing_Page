<template>
  <v-navigation-drawer
    id="navigation-drawer"
    color="background"
    v-model="drawer"
    temporary
  >
    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-currency-eur"
        title="Abonnements"
        value="abonnements"
        to="/abonnements"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-wallet-giftcard"
        title="Cartes cadeaux"
        value="cartes cadeaux"
        to="/cartes-cadeaux"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-history"
        title="Notre histoire"
        value="notre histoire"
        to="/notre-histoire"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar flat class="px-5" color="background">
    <span class="hidden-md-and-up">
      <v-btn icon @click.stop="drawer = !drawer"
        ><v-icon size="large" color="secondary">mdi-menu</v-icon></v-btn
      >
    </span>

    <v-spacer class="hidden-md-and-up"></v-spacer>

    <v-app-bar-title class="ma-0" id="nav-logo-container">
      <router-link to="/">
        <v-img width="120" :src="getImageUrl('', 'Fichier_18.svg')" />
      </router-link>
    </v-app-bar-title>

    <v-spacer class="hidden-sm-and-down"></v-spacer>

    <div
      class="nav-links-container hidden-sm-and-down align-center mx-8 pa-2 rounded rounded-xl justify-space-around"
    >
      <router-link class="router-links mx-4" to="/abonnements"
        >Abonnements</router-link
      >
      <router-link class="router-links mx-4" to="/cartes-cadeaux"
        >Cartes cadeaux</router-link
      >
      <router-link class="router-links mx-4" to="/notre-histoire"
        >Notre histoire</router-link
      >
    </div>

      <v-app-bar-action>
        <v-btn size="small" icon variant="outlined" class="btn" to="/connexion"
          ><v-icon>mdi-account</v-icon></v-btn
        >
      </v-app-bar-action>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import getImageUrl from "../../utilities/imageLoader.js";
import { ref } from "vue";

const drawer = ref<boolean | null>(null);
</script>

<style scoped>
.nav-links-container {
  border: 2px solid black;
}
#nav-logo-container {
  max-width: 120px;
}
</style>
