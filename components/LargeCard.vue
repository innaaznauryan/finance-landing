<template>
  <div class="package flex flex-col h-auto lg:h-[500px] xl:h-[600px] gap-6 justify-start items-start rounded-2xl bg-light text-dark border border-light py-6 px-4 xl:py-12 lg:px-8 shadow-custom">
    <h3 class="text-md sm:text-lg md:text-xl xl:text-3xl font-semibold whitespace-nowrap">
      {{ $t(`sections.${topic}.${name}.title`) }}
    </h3>
    <h4 class="text-md sm:text-lg md:text-xl xl:text-3xl whitespace-nowrap">
      {{ $t(`sections.${topic}.${name}.description`) }}
    </h4>
    <div class="w-full">
      <hr class="w-full">
      <ul v-if="isLargeScreen || isAccordionOpen" class="flex flex-col gap-6 text-md xl:text-xl ml-8 pt-4">
        <li v-for="(feature, index) in features" :key="index + 1" class="relative">
          {{ $t(`sections.${topic}.${name}.feature${index + 1}`) }}
        </li>
      </ul>
    </div>
    <div class="block lg:hidden w-full text-center">
      <div class="cursor-pointer pt-4 inline-block" @click="toggleAccordion">
        <ChevronDownIcon v-if="!isAccordionOpen" />
        <ChevronUpIcon v-if="isAccordionOpen" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon, ChevronUpIcon } from "vue-tabler-icons"

defineProps({
  name: {
    type: String,
    required: true
  },
  features: {
    type: Number,
    required: true,
  },
  topic: {
    type: String,
    required: true
  }
})

const isAccordionOpen = ref(false)
const isLargeScreen = ref(true)

const toggleAccordion = () => {
  isAccordionOpen.value = !isAccordionOpen.value
}

onMounted(() => {
  isLargeScreen.value = window.innerWidth >= 1024
})
</script>

<style scoped>
li:before {
  content: url("/assets/images/packages/tick-for-light.png");
  position: absolute;
  left: -40px;
}
.package:nth-child(even) {
  background-image: url("/assets/images/packages/package-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
}
.package:nth-child(even) li:before {
  content: url("/assets/images/packages/tick-for-dark.png");
  position: absolute;
  left: -40px;
}
</style>
