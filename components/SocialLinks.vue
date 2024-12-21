<template>
  <div class="flex gap-6 items-center justify-end p-6">
    <NuxtLink
      v-for="item in socialLinks"
      :key="item.name"
      :to="item.link"
      external
      class="cursor-pointer">
        <img :src="item.icon" :alt="item.name">
    </NuxtLink>
  </div>
</template>

<script setup>
import facebook from "/assets/images/social-links/facebook.png"
import linkedin from "/assets/images/social-links/linkedin.png"

const socialLinks = [
  { name: "facebook", icon: facebook, link: "https://www.facebook.com/" },
  { name: "linkedin", icon: linkedin, link: "https://www.linkedin.com/" },
]
</script>
