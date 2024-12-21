<template>
  <p class="text-light text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-12 lg:mb-24">
    {{ title }}
  </p>
</template>

<script setup>
defineProps({
  title: {
    type: [String, null],
    required: true,
  },
})
</script>
