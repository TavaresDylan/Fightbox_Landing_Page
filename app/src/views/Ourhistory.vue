<template>
  <div>
    <section class="py-5 container">
      <v-container>
        <v-row class="my-5 d-flex justify-center align-center">
          <SarahHistory></SarahHistory>
        </v-row>
      </v-container>

      <v-container>
        <v-row
          class="row d-flex flex-row-reverse my-5 justify-center align-center"
        >
          <FightboxHistory></FightboxHistory>
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
import FightboxHistory from "../components/FightboxHistory.vue";
</script>
