<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <LargeCard
      v-for="item in packages"
      :key="item.id"
      :name="item.name"
      :features="item.features"
      :topic="topic" />
  </div>
</template>

<script setup>
defineProps({
  packages: {
    type: Array,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  }
})
</script>
