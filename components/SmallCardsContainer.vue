<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16">
    <SmallCard
      v-for="feature in features"
      :key="feature.id"
      :src="feature.src"
      :name="feature.name"
      :topic="topic" />
  </div>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  }
})
</script>
