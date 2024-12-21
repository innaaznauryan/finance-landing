<template>
  <div class="text-xl relative">
    <ErrorMessage :errorMessage="errorMessage" :label="label" />
    <textarea
      :value="modelValue"
      @input="handleInput"
      :placeholder="$t(`sections.${topic}.textarea`)"
      class="resize-none bg-transparent text-light border border-light p-4 mt-4 w-full rounded-md focus:outline-none"
      rows="6"
      maxlength="400"></textarea>
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
})

const emit = defineEmits(["update:modelValue"])

const handleInput = (e) => {
  emit("update:modelValue", e.target.value)
}
</script>
