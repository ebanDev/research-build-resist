<script setup>
const useRouter = useNuxtApp().$router

defineProps(['name', 'description', 'url', 'image'])
</script>
`
<template>
  <a :href="url" target="_blank">
    <div class="card">
      <div class="header">
        <NuxtPicture :alt="name" :src="image" class="orgIcon"/>
        <h4>{{ name }}</h4>
      </div>
      <p>{{ description }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import "/assets/scss/variables.scss";

a {
  text-decoration: none;
  color: $color-text-primary;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin: 35px;
}

h4 {
  margin: 0;
  font-size: 1.5rem;
  font-family: $font-family-sans-serif;
  font-weight: 700;
}

p {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
  padding: 0 30px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .header {
    gap: 20px;
  }

  .card {
    width: 100%;
    height: max-content;
    padding-bottom: 20px;
  }

  h4 {
    font-size: 24px;
  }

  p {
    font-size: 20px;
    width: 80%;
  }

  .orgIcon {
    width: 49px;
    height: 49px;
  }
}
</style>

<style>
.orgIcon, .orgIcon img {
  width: 4rem;
  height: 4rem;
}
</style>