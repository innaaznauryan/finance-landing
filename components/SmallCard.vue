<template>
  <div class="flex flex-col gap-2 lg:gap-6 justify-center items-center rounded-2xl bg-light py-4 px-6 h-[150px] md:h-[200px] shadow-custom">
    <img :src="src" :alt="name" class="w-[30px] md:w-[60px]"/>
    <p class="text-lg xl:text-xl 2xl:text-2xl font-light text-text-base text-center">
      {{ $t(`sections.${topic}.${name}`) }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  }
})
</script>
