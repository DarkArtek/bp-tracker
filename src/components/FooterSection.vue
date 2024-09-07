<script setup lang="ts">
import { useAppSettingsStore } from "@/stores/appSettings";

const store = useAppSettingsStore();
const currentBuildVersion = import.meta.env.VITE_APP_VERSION;
</script>

<template>
  <section class="footer-content">
    <p>Luca Forzutti {{ new Date().getFullYear() }}</p>
    <a href="https://www.linkedin.com/in/lucaforzutti/" rel="noopener noreferrer" target="_blank"
      ><img src="@/assets/icons8-linkedin.svg" alt="LinkedIn Icon"
    /></a>
    <a href="https://github.com/darkart3k/blood-pressure-track" rel="noopener noreferrer" target="_blank">
      <img class="linkedin-logo" v-if="!store.isDarkModeActive" src="@/assets/github-mark.svg" alt="Github Icon" />
      <img class="linkedin-logo" v-else src="@/assets/github-mark-white.svg" alt="Github Icon" />
      <p>Version {{ currentBuildVersion }}</p>
    </a>
  </section>
</template>
<style scoped>
.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.footer-content a img {
  height: 2rem;
}

.linkedin-logo {
  height: 1.6rem !important;
}
</style>
