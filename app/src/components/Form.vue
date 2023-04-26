<template>
  <v-row id="form-container">
    <div id="bar"></div>
    <v-spacer></v-spacer>
    <v-col cols="10" md="6" lg="4">
      <v-form  @submit.prevent>
        <v-card
          id="card"
          outlined
          class="px-4 py-1 border border-dark rounded rounded-lg"
        >
          <slot name="card-content"></slot>
        </v-card>

        <slot name="form-actions"></slot>
      </v-form>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script lang="ts" setup>


</script>

<style lang="css" scoped>
#form-container {
  position: relative;
  overflow: visible;
  z-index: 1000;
}
#bar {
  position: absolute;
  width: 85vw;
  height: 3px;
  background: black;
  border-radius: 1px;
  top: 35px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 0;
}
#card {
  border: 2px solid black !important;
}
</style>
