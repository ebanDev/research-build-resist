<script setup lang="ts">
import {fetchProjects} from "~/services/projects";

const projects = await fetchProjects();
const featuredProjects = projects.projects.filter((project: any) => project.Featured === true);
const otherProjects = projects.projects.filter((project: any) => project.Featured === false);
const swiperRef = ref(null);
const swiperRefTwo = ref(null);
const swiper = useSwiper(swiperRef, {
  effect: 'cards',
  slidesPerView: 1,
  cardsEffect: {slideShadows: true, perSlideOffset: 7},
  grabCursor: true,
  centeredSlides: true,
});

const swiperTwo = useSwiper(swiperRefTwo, {
  effect: 'cards',
  slidesPerView: 1,
  cardsEffect: {slideShadows: true, perSlideOffset: 7},
  grabCursor: true,
  centeredSlides: true,
});
</script>

<template>
  <section>
    <div class="header">
      <div class="titles">
        <h2>Crafting <span>projects</span></h2>
        <h3>{{$t('projectsListDesc')}}</h3>
      </div>
    </div>

    <ClientOnly>
      <swiper-container ref="swiperRef" :init="false" v-if="$device.isMobile">
        <swiper-slide
            v-for="project in featuredProjects"
            :key="project.id"
        >
          <AtomicProjectCard
              :name="project.Name"
              :description="project.Description"
              :url="project.Link"
              :image="project.Image[0].url"
              variant="featured"
          />
        </swiper-slide>
      </swiper-container>
      <div class="cardList" v-else>
        <AtomicProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :name="project.Name"
            :description="project.Description"
            :url="project.Link"
            :image="project.Image[0].url"
            variant="featured"
        />
      </div>
    </ClientOnly>

    <ClientOnly>
      <swiper-container ref="swiperRefTwo" :init="false" v-if="$device.isMobile">
        <swiper-slide
            v-for="project in otherProjects"
            :key="project.id"
        >
          <AtomicProjectCard
              :name="project.Name"
              :description="project.Description"
              :url="project.Link"
          />
        </swiper-slide>
      </swiper-container>
      <div class="cardGrid" v-else>
        <AtomicProjectCard
            v-for="project in otherProjects"
            :key="project.id"
            :name="project.Name"
            :description="project.Description"
            :url="project.Link"
        />
      </div>
    </ClientOnly>
  </section>
</template>

<style scoped lang="scss">
@import "/assets/scss/_variables.scss";

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cardList {
  overflow-x: auto;
  overflow-y: hidden;
  display: inline-flex;
  width: 82vw;
  padding: 15px 0;
}

.cardGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

swiper-container {
  margin-top: 1rem;
}

swiper-slide {
  border-radius: 20px;
  border: 2px solid $color-border;
}

@media (max-width: 768px) {
  .cardList {
    width: 100%;
  }
}
</style>
