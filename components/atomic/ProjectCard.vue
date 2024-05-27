<script setup>
defineProps(['name', 'description', 'url'])
</script>
`
<template>
  <a :href="url" target="_blank" class="card">
    <div class="header">
      <h4>{{ name }}</h4>
    </div>
    <p>{{ description }}</p>
  </a>
</template>

<style lang="scss" scoped>
@import "/assets/scss/variables.scss";

a {
  text-decoration: none;
  color: $color-text-primary;
}

.header {
  margin: 0 0 25px 0;
}

h4 {
  margin: 0;
  font-size: 22px;
  font-family: $font-family-sans-serif;
  font-weight: 700;
}

p {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 auto;
}

.card {
  width: 200px;
  height: max-content;
  padding: 30px;
}

@media (max-width: 768px) {
  .header {
    gap: 20px;
  }

  .card {
    width: fit-content;
    height: max-content;
    padding-bottom: 20px;
  }

  h4 {
    font-size: 24px;
  }

  p {
    font-size: 20px;
    width: 100%;
    margin: 0;
  }

  .orgIcon {
    width: 49px;
    height: 49px;
  }
}
</style>