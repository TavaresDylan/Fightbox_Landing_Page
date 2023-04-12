<template>
  <div>
    <section class="py-5 container">
      <v-container>
        <v-row class="row my-5">
          <SarahHistory></SarahHistory>
        </v-row>
      </v-container>

      <v-container>
        <v-row class="row d-flex flex-row-reverse my-5">
          <v-col cols="12" md="6" class="rounded-circle text-center">
            <v-avatar
              variant="outlined"
              size="420"
              :image="getImageUrl('Fichier 3-1.svg')"
            />
          </v-col>
          <v-col cols="12" md="6">
            <h1 class="text-uppercase fw-bold">Fightbox</h1>
            <h2 class="text-uppercase fs-4">Sous Titre</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore nisi illum, autem cumque enim odit corporis quasi
              doloremque porro cupiditate quas illo sit, eius modi praesentium!
              Omnis, dolor alias. Saepe. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sit, officia. Sunt rem distinctio asperiores
              blanditiis. Optio, fugit veniam totam ut quo, ea ipsam repudiandae
              eum molestiae quia itaque, modi laudantium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aliquam enim fuga quia atque
              voluptatem recusandae totam quod nisi est quo optio ab sint,
              assumenda alias sapiente magni? Laboriosam, eaque numquam?
            </p>
          </v-col>
        </v-row>
      </v-container>

      <div class="my-5">
        <Team></Team>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Team from "../components/Team.vue";
import SarahHistory from "../components/SarahHistory.vue";

const getImageUrl = (name: string) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
</script>
