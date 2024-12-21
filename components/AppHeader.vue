<template>
  <header class="max-w-full mx-4 md:mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl py-20 sm:py-40 lg:py-60 xl:py-80 text-light flex flex-col gap-4">
    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-offside">{{ t("sections.home.subtitle") }}</h1>
    <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{{ t("sections.home.description1")}}</p>
    <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-text-base ">{{ t("sections.home.description2")}}</p>
    <AppButton
      btnClass="bg-btn-dark text-light hover:bg-btn-hover border border-light">
      <NuxtLink to="#register">{{ t("sections.home.action") }}</NuxtLink>
    </AppButton>
  </header>
</template>

<script setup>
const { t } = useI18n();
</script>


