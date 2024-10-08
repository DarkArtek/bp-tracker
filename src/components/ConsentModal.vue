<script setup lang="ts">
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { useRouter } from "vue-router";
import { useAppSettingsStore } from "@/stores/appSettings";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const appSettingsStore = useAppSettingsStore();

const { hasUserAcceptedConsentModal } = storeToRefs(appSettingsStore);

function handleConsentDenied() {
  window.location.href = "https://duckduckgo.com";
  useRouter().push({ name: "home" });
}

function handleConsentGiven() {
  hasUserAcceptedConsentModal.value = true;
  shouldShowConsentModal.value = false;
  appSettingsStore.versionNumberWhenConsented = import.meta.env.VITE_APP_VERSION;
}

function updateConsentState() {
  const currentBuildVersion = import.meta.env.VITE_APP_VERSION;
  const versionHasChanged = currentBuildVersion != appSettingsStore.versionNumberWhenConsented;

  if (hasUserAcceptedConsentModal && versionHasChanged) {
    hasUserAcceptedConsentModal.value = false;
  }
}

updateConsentState();

const shouldShowConsentModal = ref(!hasUserAcceptedConsentModal.value);
</script>
<template>
  <Dialog
    v-model:visible="shouldShowConsentModal"
    :closable="false"
    :close-on-escape="false"
    modal
    :header="t('consent.title')"
    :style="{ width: '40rem' }"
  >
    <div class="bp-form--text-inputs-container">
      <div class="">
        {{ t("consent.intro") }}
        <ul>
          <li>{{ t("consent.appLivesInBrowser") }}</li>
          <li>{{ t("consent.doesntTransmitData") }}</li>
          <li>{{ t("consent.localStorageConsent") }}</li>
          <li>{{ t("consent.persistingLimited") }}</li>
          <li>{{ t("consent.responsibleForBackups") }}</li>
          <li>{{ t("consent.noGuarantees") }}</li>
        </ul>
      </div>
      <div class="bp-form-buttons-save-cancel">
        <Button type="button" :label="t('consent.accept')" @click="handleConsentGiven()"></Button>
        <Button type="button" :label="t('consent.deny')" severity="secondary" @click="handleConsentDenied()"></Button>
      </div>
    </div>
  </Dialog>
</template>
<style scoped></style>
