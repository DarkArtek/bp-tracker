import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "./assets/main.css"
import App from "./App.vue"
import router from "./router";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { definePreset } from "@primevue/themes";
import FocusTrap from "primevue/focustrap";
import Tooltip from "primevue/tooltip";
import { createI18n } from "vue-i18n";
import { en } from "./i18n/en";
import { it } from "./i18n/it";
import { getInitLocale } from "./functions/internationalization";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import { useAppSettingsStore } from "./stores/appSettings";

const app = createApp(App);

app.directive("focustrap", FocusTrap);
app.directive("tooltip", Tooltip);

app.use(createPinia())

const appSettingsStore = useAppSettingsStore();

const i18n = createI18n({
  legacy: false, fallbackLocale: "it",
  locale: appSettingsStore.locale || getInitLocale(),
  messages: { en: en, it:it }
});

app.use(i18n);
app.use(router);
app.use(ToastService);
app.use(ConfirmationService);

const customNoir = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{zinc.50}",
      100: "{zinc.100}",
      200: "{zinc.200}",
      300: "{zinc.300}",
      400: "{zinc.400}",
      500: "{zinc.500}",
      600: "{zinc.600}",
      700: "{zinc.700}",
      800: "{zinc.800}",
      900: "{zinc.900}",
      950: "{zinc.950}",
    },
    colorScheme: {
      light: {
        primary: {
          color: "{zinc.700}",
          inverseColor: "#FFFFFF",
          hoverColor: "{zinc.600}",
          activeColor: "{zinc.500}"
        },
        highlight: {
          background: "{zinc.800}",
          focusBackground: "{zinc.600}",
          color: "#ffffff",
          focusColor: "#ffffff",
        },
      },
      dark: {
        primary: {
          color: "{zinc.50}",
          inverseColor: "{zinc.950}",
          hoverColor: "{zinc.100}",
          activeColor: "{zinc.200}",
        },
        highlight: {
          background: "rgba(250, 250, 250, .16)",
          focusBackground: "rgba(250, 250, 250, .24)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)",
        },
      },
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: customNoir,
    options: {
      darkModeSelector: ".my-app-dark"
    },
  },
});

app.component("DataTable", DataTable);
app.component("Column", Column);

app.mount("#app");

