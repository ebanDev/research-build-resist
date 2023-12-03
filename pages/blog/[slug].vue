<template>
  <section class="article">
    <top-nav/>
    <h1>
      {{ articleProps.Title }}
    </h1>
    <NotionRenderer
        :blockMap="blockMap"
    />
  </section>
</template>

<script setup>
import {watch} from 'vue'
import {fetchArticles} from "~/services/articles.js";

const route = useRoute()
const router = useRouter()
const {$notion} = useNuxtApp();
let articleSlug = route.params.slug
let data = await useAsyncData("all_posts", fetchArticles);
let articleProps = data.data._value.posts.find(x => x.Slug === articleSlug);
let {data: blockMap} = useAsyncData("page_nuxt", () =>
    $notion.getPageBlocks(articleProps.id)
);

watch(() => route.params.slug, async (newSlug) => {
  // Update the articleSlug
  articleSlug = newSlug

  // Fetch the data again
  data = await useAsyncData("all_posts", fetchArticles);
  articleProps = data.data._value.posts.find(x => x.Slug === articleSlug);
  blockMap = useAsyncData("page_nuxt", () =>
      $notion.getPageBlocks(articleProps.id)
  );
})

useHead({
  title: `${articleProps.Title} | Eban Rami`,
  meta: [
    {
      name: 'description',
      content: articleProps.Description,
    },
  ],
})
</script>

<style lang="scss">
@import "/assets/scss/variables.scss";

section.article {
  max-width: 900px;
}

.notion-page-cover {
  display: none;
}

.notion-title span span {
  font-family: $font-family-serif;
  color: $color-text-primary;
  font-weight: normal;
  font-size: 96px;
}

.notion-toggle summary, .notion-text {
  font-family: $font-family-sans-serif;
  color: $color-text-primary;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
}

.notion-h1 {
  font-family: $font-family-serif;
  color: $color-text-primary;
  font-size: 48px;
  margin: 32px 0;
}

.notion-asset-wrapper {
  margin: 0 auto;
  width: max-content;
  max-width: 100%;

  img {
    border-radius: 20px;
    width: max-content;
    max-width: 30vw;
    max-height: 70vh;
    object-fit: contain;
  }

  div {
    padding: 0 !important;
  }
}

.notion-simple-table {
  border-collapse: collapse;
  border-spacing: 0;
}

.notion-simple-table-data {
  color: inherit;
  border: 1px solid rgb(233, 233, 231);
  position: relative;
  vertical-align: top;
}

.notion-simple-table-cell-text {
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: transparent;
  padding: 7px 9px;
  background-color: transparent;
  font-size: 14px;
  line-height: 20px;
}

.notion-list {
  word-break: break-all;
  padding-inline-start: 20px;
}

.notion-simple-table-header {
  background: rgb(247, 246, 243);
  font-weight: 500;
}

.notion-toggle {
  padding: 10px;
  cursor: pointer;
}

@media (max-width: 768px) {
  h1 {
    font-size: 56px;
  }

  section.article {
    padding-top: 125px;
  }

  .notion-asset-wrapper {
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  pre.notion-code code {
    width: 80vw;
    overflow-x: auto;
    display: block
  }

  code.notion-inline-code span {
    word-break: break-all;
  }

  .notion-list {
    word-break: break-all;
    padding-inline-start: 20px;
  }
}

</style>
