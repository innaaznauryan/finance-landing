<template>
  <div class="text-light text-xl flex gap-4">
    <input
      :checked="modelValue"
      @change="handleChange"
      type="checkbox"
      :id="`${topic}-${label}`"
      class="accent-text-accent cursor-pointer">
    <label
      :for="`${topic}-${label}`"
      class="cursor-pointer">
        {{ $t(`sections.${topic}.checkbox`) }}
    </label>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
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

const handleChange = (e) => {
  emit("update:modelValue", e.target.checked)
}
</script>
