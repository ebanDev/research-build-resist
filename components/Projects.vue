<script setup lang="ts">
import {fetchProjects} from "~/services/projects";
import ProjectCard from "~/components/atomic/ProjectCard.vue";


const projects = await fetchProjects();
</script>

<template>
  <section>
    <div class="header">
      <div class="titles">
        <h2>Crafting <span>projects</span></h2>
        <h3>ventures i’m working on</h3>
      </div>
    </div>

    <div class="cardList">
      <ProjectCard
          v-for="project in projects.projects"
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


@media (min-width: 768px) {
  .cardList {
    width: 75vw;
  }
}
</style>