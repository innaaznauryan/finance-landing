<template>
  <footer class="bg-light text-center">
    <div class="max-w-full mx-4 md:mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl py-6 md:py-12">
      <img class="h-[70px] md:h-[100px] my-6 py-2" :src="logo" alt="logo" />
      <hr>
      <p class="text-center text-base sm:text-xl md:text-2xl p-6">{{ $t("sections.footer") }} {{ year }}</p>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  logo: {
    type: String,
    required: true,
  }
})
const year = new Date().getFullYear()
</script>
