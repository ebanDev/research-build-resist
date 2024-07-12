<script setup>
const { locale, setLocale } = useI18n()
let scrolled = ref(false)
const useRouter = useNuxtApp().$router

const handleScroll = () => {
  scrolled.value = window.scrollY > 5;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' || e.key === '.') {
      window.location = 'https://terminal.eban.eu.org'
    }
  })
})
</script>

<template>
  <header :class="scrolled ? 'scrolled' : ''">
    <NuxtPicture alt="My profile picture" src="/profile-picture.jpg" @click="useRouter.push({ path: '/' })"/>
    <h4 @click="useRouter.push({ path: '/' })">Research, Build, Resist.</h4>
    <div class="icons">
      <a href="https://github.com/ebanDev" target="_blank">
        <Icon name="lucide:github"/>
      </a>
      <a href="https://twitter.com/eban_non" target="_blank">
        <Icon name="lucide:twitter"/>
      </a>
      <a href="mailto:contact@eban.eu.org" target="_blank">
        <Icon name="lucide:mail"/>
      </a>
      <a href="https://www.linkedin.com/in/eban-rami/" target="_blank">
        <Icon name="lucide:linkedin"/>
      </a>
      <a href="https://terminal.eban.eu.org" target="_blank">
        <Icon name="lucide:terminal-square"/>
      </a>
      <a @click="setLocale('fr')" v-if="locale !== 'fr'">
        <Icon name="ph:translate-bold"/>
        FR
      </a>
      <a @click="setLocale('en')" v-else>
        <Icon name="ph:translate-bold"/>
        EN
      </a>
    </div>
  </header>
</template>

<style lang="scss">
@import "/assets/scss/variables.scss";

header {
  position: fixed;
  top: 0;
  left: 25%;
  right: 25%;
  margin: 24px 0;
  height: 100px;
  align-items: center;
  transition: 0.3s all ease;
  display: flex;
  justify-content: space-between;

  img, picture {
    border-radius: 16px;
    height: 90px;
    width: 90px;
    cursor: pointer;
  }

  picture {
    width: 160px;
  }

  h4 {
    color: $color-accent;
    font-size: 2rem;
    cursor: pointer;
    text-align: center;
    margin: 10px;
  }

  .icons {
    display: flex;
    gap: 10px;

    a {
      cursor: pointer;
      transition: 0.1s all ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    .icon {
      height: 22px;
      width: auto;
    }
  }


  * {
    transition: 0.3s all ease;
  }

  &.scrolled {
    top: 0;
    left: 10%;
    right: 10%;
    background-color: $color-header-background;
    z-index: 100;
    margin: 24px 2.5%;
    border: 3px solid $color-header-border;
    border-radius: 25px;
    height: 80px;
    backdrop-filter: blur(10px);
    box-shadow: $box-shadow-primary;
    padding: 0 25px 0 15px;

    img, picture {
      height: 60px;
      width: 60px;
    }

    picture {
      width: 160px;
    }
  }

}

@media (max-width: 768px) {
  header, header.scrolled {
    left: 0;
    right: 0;
    margin: 0;
    top: 0;
    height: 100px;
    justify-content: center;
    max-width: 100vw;
    background-color: $color-header-background;
    z-index: 100;
    border: 3px solid $color-header-border;
    border-radius: 0 0 25px 25px;
    box-shadow: 5px 5px 15px 0 rgba(40, 10, 0, 0.08);
    gap: 35px;

    & img, & picture {
      height: 70px;
      width: 70px;
      margin: 0;
    }

    & h4 {
      font-size: 26px;
      max-width: 50%;
    }

    & .icons {
      display: none;
    }
  }
}
</style>
