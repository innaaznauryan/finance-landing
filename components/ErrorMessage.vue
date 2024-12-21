<template>
  <span
    v-if="errorMessage"
    class="absolute right-2 top-8 bg-error text-light text-sm rounded-md px-2">
      {{errorMessage.replace("Value", label[0].toUpperCase() + label.slice(1))}}
  </span>
</template>

<script setup>
defineProps({
  errorMessage: {
    type: [String, null],
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>
