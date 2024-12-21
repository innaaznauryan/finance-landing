<template>
  <div class="text-md lg:text-xl text-light flex flex-col py-6 relative">
    <label
      :for="`${topic}-${label}`"
      class="text-light">
      {{ $t(`sections.${topic}.${label}.label`) }}
    </label>
    <ErrorMessage :errorMessage="errorMessage" :label="label" />
    <input
      :value="modelValue"
      @input="handleInput"
      type="text"
      :id="`${topic}-${label}`"
      :placeholder="$t(`sections.${topic}.${label}.placeholder`)"
      class="placeholder-text-base bg-transparent py-2 pl-10 border-b border-b-light outline-none">
    <img :src="icon" alt="icon" class="absolute top-[60px] lg:top-[66px] left-2">
  </div>

</template>

<script setup>
import ErrorMessage from '~/components/ErrorMessage.vue'

defineProps({
  modelValue: {
    type: [String, null],
    required: false,
  },
  errorMessage: {
    type: [String, null],
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  }
})

const emit = defineEmits(["update:modelValue"])

const handleInput = (e) => {
  emit("update:modelValue", e.target.value)
}
</script>
