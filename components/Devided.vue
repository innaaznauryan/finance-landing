<template>
  <section class="max-w-full mx-4 my-8 md:my-0 md:mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
    <div class="w-full md:w-1/2 flex justify-center md:justify-start">
      <slot name="left"></slot>
    </div>
   <div class="w-full md:w-1/2 flex justify-center md:justify-end">
     <slot name="right"></slot>
   </div>
  </section>
</template>

<script setup>
</script>
