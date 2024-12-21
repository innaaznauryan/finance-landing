<template>
  <section class="max-w-full mx-4 md:mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
    <Heading :heading="heading" :justify="justify" />
    <slot></slot>
  </section>
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
