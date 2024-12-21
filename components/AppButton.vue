<template>
  <div>
    <button
      :class="`${btnClass} px-12 py-4 mt-6 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full transition duration-300`"
      :type="type">
        <slot>OK</slot>
    </button>
  </div>
</template>

<script setup>
defineProps({
  btnClass: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  }
})
</script>
