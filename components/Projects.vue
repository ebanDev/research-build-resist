<script setup lang="ts">
import {fetchProjects} from "~/services/projects";
import ProjectCard from "~/components/atomic/ProjectCard.vue";


const projects = await fetchProjects();
const featuredProjects = projects.projects.filter((project: any) => project.Featured === true);
const otherProjects = projects.projects.filter((project: any) => project.Featured === false);

console.log(projects)
</script>

<template>
  <section>
    <div class="header">
      <div class="titles">
        <h2>Crafting <sfrpan>projects</sfrpan></h2>
        <h3>{{$t('projectsListDesc')}}</h3>
      </div>
    </div>

    <div class="cardList">
      <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :name="project.Name"
          :description="project.Description"
          :url="project.Link"
          :image="project.Image[0].url"
          variant="featured"
      />
    </div>

    <div class="cardList">
      <ProjectCard
          v-for="project in otherProjects"
          :key="project.id"
          :name="project.Name"
          :description="project.Description"
          :url="project.Link"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "/assets/scss/variables.scss";

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cardList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

@media (max-width: 768px) {
  .cardList {
    width: 100%;
  }
}
</style>
