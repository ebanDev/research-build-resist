<template>
  <section id="about">
    <h1>{{ $t('hi') }} <span>Eban</span>, {{ $t('work') }}</h1>
    <p>{{ $t('aboutDesc') }}</p>
    <button><nuxt-link to="#contact">{{ $t('contactBtn') }}</nuxt-link></button>
  </section>
</template>

<style lang="scss" scoped>
@import "/assets/scss/variables.scss";

section {
  padding-top: 300px;
  padding-bottom: 50px;
}

h1 {
  font-size: 5.5rem;
}

p {
  margin-top: 1.2rem !important;
  line-height: 1.5;
}

@media (max-width: 768px) {
  section {
    padding-top: 150px;
    padding-bottom: 0;
  }

  h1 {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
