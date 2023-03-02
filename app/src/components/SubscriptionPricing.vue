<template>
  <v-container>
    <h2>Abonnements</h2>
    <v-card variant="outlined" border="2">
      <v-row class="ma-0 pa-0">
        <v-col class="pa-0 ma-0">
          <v-expansion-panels
            tile
            v-model="expansionPanelState"
            variant="accordion"
          >
            <v-expansion-panel
              rounded="0"
              value="little-kick"
              class="bg-secondary"
            >
              <v-expansion-panel-title> Little Kick </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium fuga voluptatibus, mollitia autem laudantium
                    odio nihil odit consectetur nobis earum architecto commodi
                    voluptatem libero necessitatibus vel dicta dolorum maxime
                    quae.
                  </p>
                  <v-btn>Les abonnements</v-btn>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel
              rounded="0"
              value="high-kick"
              class="bg-primary"
            >
              <v-expansion-panel-title> High Kick </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium fuga voluptatibus, mollitia autem laudantium
                    odio nihil odit consectetur nobis earum architecto commodi
                    voluptatem libero necessitatibus vel dicta dolorum maxime
                    quae.
                  </p>
                  <v-btn>Les abonnements</v-btn>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col id="right-container" class="pa-0 ma-0 d-flex justify-center align-center">
          <v-card height="300" width="300" class="ma-6">
            <v-card-title> coucou ma couille </v-card-title>
            <v-img
              cover
              src="https://picsum.photos/seed/picsum/200/300"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const expansionPanelState = ref("little-kick");
</script>

<style scoped>
#right-container {
  border-left: 1px solid black;
}
</style>
