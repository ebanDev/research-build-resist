<script setup>
const useRouter = useNuxtApp().$router
const props = defineProps(['post'])
</script>

<template>
  <nuxt-link :to="`/blog/${props.post.Slug}`">
    <div :class="{ card: true, highlighted: props.post.Highlighted }">
      <img v-if="props.post.Highlighted" :src="props.post.Cover" alt="Article cover">
      <div class="content">
        <div class="metadata">
        <span class="category">
          {{ props.post.Category[0] }}
        </span>

          <span class="time">
          {{
              new Date(props.post.Date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })
            }}
        </span>
        </div>

        <h4>
          {{ props.post.Title }}
        </h4>

        <p>
          {{ props.post.Description }}
        </p>


      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
@import "/assets/scss/variables.scss";

.card {
  width: 335px;
  height: 350px;

  &.highlighted {
    width: 530px;
    height: 590px;

    h4 {
      font-size: 30px;
    }

    .content {
      padding: 35px;
      display: flex;
      gap: 15px;
    }

    .category, .time {
      font-size: 16px;
    }

    p {
      font-size: 20px;
    }
  }
}

h4 {
  font-size: 22px;
  font-family: $font-family-sans-serif;
  font-weight: 700;
}

img {
  width: 100%;
  border-radius: 20px 20px 0 0;
  height: 150px;
  object-fit: cover;
}

.card .content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.metadata {
  display: flex;
  align-self: flex-start;
  gap: 10px;

  span {
    border: 3px solid $color-accent;
    font-size: 12px;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 25px;
    height: max-content;
  }

  .category {
    background: $color-accent;
    color: $color-background-secondary;
  }
}

p {
  flex-grow: 1;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 auto;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  line-clamp: 7;
  -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
  .card.highlighted {

    width: 100%;
    height: max-content;

    img {
      height: 125px;
    }

    h4 {
      font-size: 22px;
    }

    .category, .time {
      font-size: 13px;
      padding: 8px 13px;
    }

    p {
      font-size: 18px;
      -webkit-line-clamp: 6;
      line-clamp: 6;
    }
  }

  .card:not(.highlighted) {
    height: max-content;
    width: 100%;
  }
}
</style>