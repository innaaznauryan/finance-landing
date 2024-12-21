<template>
  <NuxtLayout>
    <NavBar
      :logo="logo"
      :supportedLocales="supportedLocales" />
    <main class="mt-[100px] bg-no-repeat bg-cover">
      <NuxtPage :logo="logo" />
    </main>
  </NuxtLayout>
</template>

<script setup>
import logo from "/assets/images/logo.png"

import armenian from "/assets/images/langs/armenian.png"
import english from "/assets/images/langs/english.png"
import russian from "/assets/images/langs/russian.png"

const { t, setLocale } = useI18n();

useHead({
  title: t("site.name"),
  meta: [
    { hid: "description", name: "description", content: t("site.description") },
    { hid: 'keywords', name: 'keywords', content: "monity, financial, planning, money, assets, management, budgeting app, expense, banking, investment, incomes, outcomes, resources, goals, crypto, currency, cash flow, loans, taxes, calculate, reports" }
  ],
  link: [
    { href: "https://fonts.googleapis.com", rel: "preconnect" },
    { href: "https://fonts.gstatic.com", rel: "preconnect", crossorigin: true },
    { href: "https://fonts.googleapis.com/css2?family=Offside&display=swap", rel: "stylesheet" },
    { href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap", rel: "stylesheet" },
    { href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap", rel: "stylesheet"}
  ],
})

const supportedLocales = {
  "en": { value: "en", src: english },
  "hy": { value: "hy", src: armenian },
  "ru": { value: "ru", src: russian },
};

onMounted(() => {
  const langCode = navigator.language.split('-')[0];
  if (sessionStorage.locale) {
    setLocale(sessionStorage.locale)
  } else if (supportedLocales[langCode]) {
    setLocale(langCode)
  } else {
    setLocale(supportedLocales.en.value)
  }
})
</script>
