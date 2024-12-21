<template>
  <nav class="fixed z-50 top-0 left-0 bg-light w-full shadow-custom">
    <div class="h-[100px] max-w-full mx-4 md:mx-auto md:max-w-screen-xl flex items-center justify-between">
      <button class="h-full py-2 flex flex-shrink-0 items-center" @click="scrollToTop">
        <img class="h-2/3 md:h-full" :src="logo" alt="logo" />
      </button>
      <div class="flex items-center justify-center gap-6">
        <div class="flex lg:hidden">
          <button @click="toggleMenu">
            <Menu2Icon/>
          </button>
        </div>
        <ul v-if="isMenuOpen" class="lg:hidden absolute top-[100px] left-1/2 -translate-x-1/2 w-1/2 sm:w-1/3 mt-2 bg-light shadow-custom text-center">
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="border-b border-gray-200 text-lg cursor-pointer"
            @click="closeMenu">
            <NuxtLink
              :to="`#${item.id}`"
              class="block text-dark w-full h-full hover:bg-light-gray px-4 py-2">
              {{ $t(`sections.${item.id}.title`) }}
            </NuxtLink>
          </li>
        </ul>
        <ul class="hidden lg:flex gap-2">
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="mt-1.5 border-b-[6px] border-transparent hover:border-nav-accent px-2 py-7 text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer">
            <NuxtLink
              :to="`#${item.id}`"
              class="text-dark whitespace-nowrap">
              {{ $t(`sections.${item.id}.title`) }}
            </NuxtLink>
          </li>
        </ul>
        <SelectLanguage
          :supportedLocales="supportedLocales" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Menu2Icon } from "vue-tabler-icons"

defineProps({
  logo: {
    type: String,
    required: true,
  },
  supportedLocales: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n();

const menuItems = [
  { id: "home" },
  { id: "about" },
  { id: "comingSoon" },
  { id: "packages" },
  { id: "suggestions" },
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({top: 0})
}
</script>
