<template>
  <section id="organizations">
    <h2>Building <span>movements</span></h2>
    <h3>{{ $t('organizationsListDesc') }}</h3>
    <div class="cardList">
      <OrgCard v-for="organization in organizations" :key="organization.name" :description="organization.description"
               :image="organization.image" :name="organization.name" :url="organization.url"></OrgCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/assets/scss/variables.scss";
</style>

<script setup>
import OrgCard from './atomic/OrgCard.vue'

const organizations = ref([
  {
    name: 'Mouvement National Lycéen',
    url: 'https://mnl-syndicat.fr/',
    image: '/mnl.png',
    description: 'At MNL, I co-led app development, authored impactful blog and press releases, and held the role of National Secretary for IT and International Affairs. In this capacity, I facilitated international collaborations with high school students and e-democracy.',
  },

  {
    name: 'I Learned',
    url: 'https://ilearned.eu/',
    image: '/ilearned.png',
    description: 'I co-founded I Learned, a project dedicated to democratizing computer science through diverse mediums. With a team of 14 contributors, I\'ve written dozens of blog, striving to make information technology accessible to a wider audience.',
  }
])
</script>
