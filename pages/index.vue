<template>
  <AppHeader id="home" />
  <About
    id="about"
    :heading="$t('sections.about.title')"
    justify="end">
    <Devided>
      <template #left>
        <img :src="about" alt="about" class="mx-auto" />
      </template>
      <template #right>
        <p class="text-light text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left">
          {{ $t("sections.about.description") }}
        </p>
      </template>
    </Devided>
  </About>
  <ComingSoon id="comingSoon" :heading="$t('sections.comingSoon.subtitle')">
    <ComingSoonCards
      :features="comingSoonFeatures"
      topic="comingSoon" />
  </ComingSoon>
  <Future id="future" :heading="$t('sections.future.title')" justify="end">
    <FutureCards
      :features="futureFeatures"
      topic="future" />
  </Future>
  <Packages id="packages" :heading="$t('sections.packages.title')">
    <PackagesCards
      :packages="packages"
      topic="packages" />
  </Packages>
  <Devided id="register">
    <template #left>
      <RegisterForm
        :emailIcon="emailIcon"
        :profileIcon="profileIcon" />
    </template>
    <template #right>
      <img :src="register" alt="moneybox" class="w-2/3 md:w-full">
    </template>
  </Devided>
  <Description />
  <Devided id="suggestions">
    <template #left>
      <img :src="suggestion" alt="bulb" class="w-2/3 md:w-full">
    </template>
    <template #right>
      <SuggestionForm :emailIcon="emailIcon" />
    </template>
  </Devided>
  <AppFooter :logo="logo" />
  <ToTopButton />
</template>

<script setup>
import { comingSoonFeatures } from '~/constants/comingSoon.ts'
import { futureFeatures } from '~/constants/future.ts'
import { packages } from '~/constants/packages.ts'

import {
  default as About,
  default as ComingSoon,
  default as Future,
  default as Packages
} from "/components/AppSection.vue"
import {
  default as ComingSoonCards,
  default as FutureCards,
} from "/components/SmallCardsContainer.vue"
import {
  default as PackagesCards,
} from "/components/LargeCardsContainer.vue"

import about from "/assets/images/about.png"
import register from "/assets/images/register.png"
import emailIcon from "/assets/images/forms/email.png"
import profileIcon from "/assets/images/forms/profile.png"
import suggestion from "/assets/images/suggestion.png"

const { t } = useI18n();

defineProps({
  logo: {
    type: String,
    required: true,
  }
})
</script>
