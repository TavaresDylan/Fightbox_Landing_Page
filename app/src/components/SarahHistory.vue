<template>
  <v-col cols="12" md="6" class="text-center">
    <v-avatar  variant="outlined" size="420" :image="getImageUrl('IMG_1749_rezied.jpg')" />
  </v-col>
  <v-col cols="12" md="6">
    <h1 class="text-uppercase fw-bold">Sarah</h1>
    <h2 class="text-uppercase fs-4">Sous Titre</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nisi
      illum, autem cumque enim odit corporis quasi doloremque porro cupiditate
      quas illo sit, eius modi praesentium! Omnis, dolor alias. Saepe. Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Sit, officia. Sunt rem
      distinctio asperiores blanditiis. Optio, fugit veniam totam ut quo, ea
      ipsam repudiandae eum molestiae quia itaque, modi laudantium. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Aliquam enim fuga quia atque
      voluptatem recusandae totam quod nisi est quo optio ab sint, assumenda
      alias sapiente magni? Laboriosam, eaque numquam?
    </p>
  </v-col>
</template>

<script lang="ts" setup>
const getImageUrl = (name: string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};
</script>
