<template>
  <v-container fluid class="sub-container mt-8 rounded-t-xl">
    <v-container>
      <h2 class="text-h3 font-weight-bold text-uppercase mb-4">Abonnements</h2>
      <v-card variant="outlined" class="rounded-lg card mt-8">
        <v-row class="ma-0 pa-0">
          <v-col class="pa-0 ma-0">
            <v-expansion-panels
              tile
              v-model="expansionPanelState"
              variant="accordion"
              class="exp-panels"
            >
              <v-expansion-panel
                rounded="0"
                value="little-kick"
                class="bg-primary"
              >
                <v-expansion-panel-title> Little Kick </v-expansion-panel-title>
                <v-expansion-panel-text class="mt-2">
                  <div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium fuga voluptatibus, mollitia autem laudantium
                      odio nihil odit consectetur nobis earum architecto commodi
                      voluptatem libero necessitatibus vel dicta dolorum maxime
                      quae.
                    </p>
                    <v-btn
                      color="darkBtn"
                      class="rounded-xl mt-4 font-weight-bold"
                      >Découvrir</v-btn
                    >
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel
                rounded="0"
                value="high-kick"
                class="bg-secondary"
              >
                <v-expansion-panel-title> High Kick </v-expansion-panel-title>
                <v-expansion-panel-text class="mt-2">
                  <div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium fuga voluptatibus, mollitia autem laudantium
                      odio nihil odit consectetur nobis earum architecto commodi
                      voluptatem libero necessitatibus vel dicta dolorum maxime
                      quae.
                    </p>
                    <v-btn
                      color="darkBtn"
                      class="rounded-xl mt-4 font-weight-bold"
                      >Découvrir</v-btn
                    >
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col id="right-container" class="pa-0 ma-0 d-flex w-100">
            <v-sheet class="w-100 d-flex justify-center" color="secondary">
              <v-card height="300" width="300" class="ma-6">
                <v-img cover src="https://picsum.photos/1920/1080"></v-img>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <v-container class="mt-8">
      <v-row>
        <v-col>
          <v-card height="220px">
            <v-card-title>Coucou</v-card-title>
          </v-card>
        </v-col>
        <v-col class="d-flex flex-column">
          <h2 class="text-h3 text-uppercase font-weight-thin">
            <span class="font-weight-bold mr-2">Relax</span>Box
          </h2>
          <p class="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem animi debitis, libero corporis labore nisi excepturi
            officiis reprehenderit laudantium ipsa quas delectus porro neque
            aspernatur eius eligendi et amet vitae.
          </p>
          <v-btn color="primary" class="rounded-xl font-weight-bold mt-4 justify-self-center" variant="tonal">Je découvre <v-icon class="ml-2" icon="mdi-arrow-right" /></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const expansionPanelState = ref<string>("little-kick");
const littleKickExpPanelState = ref<boolean>(true);
const highKickExpPanelState = ref<boolean>(false);
// TODO: Add a function to change the expansion panel state and to avoid both panel being closed at the same time
</script>

<style lang="css" scoped>
#right-container {
  border-left: 1px solid black;
}
.sub-container {
  min-height: 100vh;
  background-color: white;
  border: 2px solid black;
}
.exp-panels {
  min-height: 100% !important;
}

.card {
  border: 2px solid black;
}
</style>
