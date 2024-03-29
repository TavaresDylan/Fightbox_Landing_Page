import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/css/styles.css"

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
library.add(faTiktok, faArrowRight)

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#ffe2cb",
    surface: "#FFFFFF",
    primary: "#ffa86b",
    "primary-darken-1": "#3700B3",
    secondary: "#0000FF",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    darkBtn: "#000000",
  },
};

// TODO: Add the dark theme

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});

createApp(App).use(router).use(vuetify).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
