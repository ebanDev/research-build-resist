<template>
  <section>
    <div class="header">
      <div class="titles">
        <h2>Bytes of <span>insight</span></h2>
        <h3>all the articles i’ve written</h3>
      </div>
    </div>

    <div class="cardList">
      <ArticleCard
          v-for="article in data.posts"
          :key="article.id"
          :post="article"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/assets/scss/variables.scss";


.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cardList {
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  section {
    padding-top: 150px;
    width: 90%;
  }
}
</style>

<script lang="ts" setup>

import ArticleCard from "~/components/atomic/ArticleCard.vue";
import {fetchArticles} from "~/services/articles";

const route = useRoute()

const {data, pending, error} = await useAsyncData("all_posts", fetchArticles);

useHead({
  title: 'Articles | Eban Rami',
  meta: [
    {
      name: 'description',
      content: "All the articles I've written",
    },
  ],
})
</script>