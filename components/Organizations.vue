<template>
  <section id="organizations">
    <h2>Building <span>movements</span></h2>
    <h3>{{ $t('organizationsListDesc') }}</h3>
    <ClientOnly>
      <swiper-container ref="swiperRef" :init="false" v-if="$device.isMobile">
        <swiper-slide v-for="organization in organizations" :key="organization.name">
          <AtomicOrgCard :name="organization.name" :description="organization.description" :image="organization.image"
                   :url="organization.url" variant="featured"/>
        </swiper-slide>
      </swiper-container>
      <div class="cardList" v-else>
        <AtomicOrgCard v-for="organization in organizations" :key="organization.name" :description="organization.description"
                :image="organization.image" :name="organization.name" :url="organization.url" />
      </div>
    </ClientOnly>
    
  </section>
</template>

<style lang="scss" scoped>
@import "/assets/scss/variables.scss";

swiper-container {
  margin-top: 1rem;
}

swiper-slide {
  border-radius: 20px;
  border: 2px solid $color-border;
}
</style>

<script setup>
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

const swiperRef = ref(null)
const swiper = useSwiper(swiperRef, {
  effect: 'cards',
  slidesPerView: 1,
  cardsEffect: {slideShadows: true, perSlideOffset: 7},
  grabCursor: true,
  centeredSlides: true,
});
</script>
