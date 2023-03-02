<template>
  <!-- <v-container class="relative">
    <div id="bar"></div>
    <v-row>
      <v-col cols="4">
        <v-card border class="d-flex">
          <v-img
            cover
            height="400"
            src="https://picsum.photos/seed/picsum/200/300"
          ></v-img>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="7">
        <h2 class="text-uppercase mb-4 d-flex">
          <span class="bold-text">Fight</span
          ><span class="light-text ml-1">girl</span>
        </h2>
        <div>
          <h3 class="text-uppercase text-h1 bg-white px-4 py-2 z-100">
            <span class="bold-text">Sarah</span
            ><span class="light-text ml-6">Time</span>
          </h3>
        </div>
        <p class="text-justify my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          exercitationem adipisci dicta ipsa reiciendis repellat hic quisquam
          porro eveniet, eligendi debitis, fugiat excepturi ab, aut minima!
          Quidem non reprehenderit vitae?
        </p>
        <v-btn
          to="/notre-histoire"
          border
          color="primary"
          size="x-large"
          variant="flat"
          ><v-icon start size="x-large" icon="mdi-arrow-right mr-2"></v-icon
          >notre histoire
        </v-btn>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script setup>
const props = defineProps({
  reversed: Boolean,
});
</script>

<style scoped>
.bold-text {
  font-family: "FuturaExtraBold";
}
.light-text {
  font-family: "FuturaLight";
}
.relative {
  position: relative;
}
.z-100{
  z-index: 1000;
  position: relative;
}
#bar {
  width: 85vw;
  height: 6px;
  background: black;
  position: absolute;
  top: 120px;
  z-index: 10;
}
</style>
