<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <h1>{{ t("common.inProcess") }}</h1>
</template>
