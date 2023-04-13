<template>
  <v-footer class="bg-secondary rounded-t-xl py-6 border-footer">
    <v-row class="mx-5">
      <v-col class="d-flex justify-center" cols="12" sm="6" md="3" v-for="item in footerList" :key="item.title">
        <v-list variant="flat" bg-color="transparent" density="compact">
          <v-list-subheader color="white">{{ item.title }}</v-list-subheader>
          <v-list-item
            color="secondary"
            variant="text"
            v-for="it in item.items"
            :key="it"
          >
            <router-link class="router-links text-white" to="/abonnements">{{
              it
            }}</router-link>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="3">
        <div class="d-flex align-center justify-md-center justify-space-between">
          <v-row class="align-center">
            <span class="text-h1">#</span>
            <img
              class="custom-img"
              height="74"
              :src="getImageUrl('fightbox-logo-white.svg')"
            >
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="d-flex justify-md-end justify-center">
        <v-btn flat variant="text" icon
          ><v-icon size="x-large" icon="mdi-instagram"></v-icon
        ></v-btn>
        <v-btn flat variant="text" icon
          ><v-icon size="x-large" icon="mdi-facebook"></v-icon
        ></v-btn>
        <v-btn flat variant="text" icon>
          <font-awesome-icon size="xl" icon="fab fa-tiktok"
        /></v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const getImageUrl = (name: string) => {
  return new URL(`../../assets/svg/${name}`, import.meta.url).href;
};

type FooterList = {
  title: string;
  items: string[];
};

const footerList: Ref<FooterList[]> = ref([
  {
    title: "Menu",
    items: ["Mes abonnements", "Les articles", "Profile", "Paramètres"],
  },
  {
    title: "Des questions ?",
    items: [
      "Contacter le support",
      "Conditions générales",
      "Gérer les cookies",
      "Mentions légales",
    ],
  },
]);
</script>

<style lang="css">
.custom-img > img {
  width: fit-content;
}
footer{
  border: 2px solid black !important;
}
</style>
