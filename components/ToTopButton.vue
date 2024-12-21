<template>
  <div
    class="fixed bottom-12 right-12 w-10 h-10 md:w-16 md:h-16 rounded-full bg-nav-accent cursor-pointer flex justify-center items-center shadow-custom"
    @click="scrollToTop">
      <NuxtLink class="text-light">
        <ArrowUpIcon size="36" />
      </NuxtLink>
  </div>
</template>

<script setup>
import { ArrowUpIcon } from "vue-tabler-icons"

const scrollToTop = () => {
  window.scrollTo({top: 0})
};
</script>
