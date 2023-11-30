<template>
  <article class="prose-lg text-base-content">
  </article>
</template>

<script setup>
useHead({
  script: [
    {
      hid: 'mathjax',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML',
      defer: true,
    },
  ],
})
const props = defineProps(['articleId'])

</script>

<style lang="scss" scoped>

.cover {
  width: 100%;
  border-radius: 15px;
  height: 200px;
  object-fit: cover;
}

</style>