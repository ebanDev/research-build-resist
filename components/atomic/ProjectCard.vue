<script setup>
defineProps(['name', 'description', 'url', 'image', 'variant']);
</script>

<template>
  <a :href="url" target="_blank" class="card" :class="variant === 'featured' ? 'featured' : ''">
    <img v-if="image" :src="image" alt="Project Image" />
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
  margin: 0 0 15px 0;
}

h4 {
  margin: 0;
  font-size: 1.3rem;
  font-family: $font-family-sans-serif;
  font-weight: 700;
  text-align: center;
}

p {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 auto;
}

.card {
  width: 200px;
  height: max-content;
  padding: 22px;
}

.card.featured {
  width: min-content;
  padding: 0;

  img {
    width: max-content;
    height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  .header {
    padding: 20px 20px 0;
  }

  p {
    padding: 0 20px 20px;
  }
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

  .card.featured {
    width: 100%;

    img {
      width: 100%;
      height: 200px;
      border-radius: 20px 20px 0 0;
    }

    p {
      padding: 0 20px 20px;
      width: fit-content;
    }
  }

  h4 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.1rem;
    width: 100%;
    margin: 0;
  }

  .orgIcon {
    width: 49px;
    height: 49px;
  }
}
</style>
