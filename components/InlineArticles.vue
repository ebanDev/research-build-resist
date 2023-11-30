<template>
  <section>

    <div class="header">
      <div class="titles">
        <h2>Bytes of <span>insight</span></h2>
        <h3>articles i’ve written</h3>
      </div>

      <button
          @click="useRouter.push({ path : '/articles'})">
        See more
      </button>
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
  overflow-x: auto;
  overflow-y: hidden;
  display: inline-flex;
  width: 82vw;
  padding: 15px 0;
}

.card:not(.highlighted) {
  display: none !important;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: baseline;
    gap: 15px;
  }

  .cardList {
    width: 100vw;
    transform: translateX(-7.5%);
    padding-top: 15px;
    padding-bottom: 15px;
    flex-direction: row;
    display: flex;
  }

  .cardList .card.highlighted:first-child {
    margin-left: 15px;
  }

  .cardList .card.highlighted:last-child {
    margin-right: 15px;
  }
}
</style>

<script setup>
import ArticleCard from "~/components/atomic/ArticleCard.vue";
import {fetchArticles} from "~/services/articles.js";

const useRouter = useNuxtApp().$router

const {data, pending, error} = await useAsyncData("all_posts", fetchArticles);
</script>