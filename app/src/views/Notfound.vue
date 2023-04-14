<template>
  <div class="text-center my-6">
    <h1 class="my-4">Oups ..</h1>
    <div class="d-flex">
      <v-img
        class="ma-2"
        height="324px"
        :src="getImageUrl('svg', 'NotFound.svg')"
      ></v-img>
    </div>
    <h2 class="mt-4">Page non trouvée</h2>
    <h3>Il semblerais que la page que vous recherchez n'existe pas.</h3>
  </div>
</template>

<script lang="ts" setup>
import getImageUrl from "../utilities/imageLoader.js";
</script>
