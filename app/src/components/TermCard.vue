<template>
  <v-card class="card rounded-lg" height="240px">
    <div class="top d-flex align-center">
      <v-icon class="ml-2" size="x-small" icon="mdi-circle-outline" color="white" />
      <v-icon size="x-small" icon="mdi-circle-outline" color="white" />
      <v-icon size="x-small" icon="mdi-circle-outline" color="white" />
    </div>
    <slot></slot>
  </v-card>
</template>

<style lang="css" scoped>
.card {
  border: 2px solid black;
}
.top {
  width: 100%;
  height: 33px;
  background-color: black;
}
</style>
