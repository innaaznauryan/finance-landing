<template>
  <div :class="`heading text-light text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap flex items-center gap-4 py-16 md:pt-44 md:pb-28 font-poppins justify-${justify}`">
    <h2>{{heading}}</h2>
    <span class="h-[1px] w-[200px] md:w-[400px] bg-light"></span>
  </div>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  justify: {
    type: String,
    default: "start"
  }
})
</script>
