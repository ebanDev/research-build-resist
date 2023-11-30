<script setup>
let scrolled = ref(false)
const useRouter = useNuxtApp().$router

const handleScroll = () => {
  scrolled.value = window.scrollY > 5;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="scrolled ? 'scrolled' : ''">
    <NuxtPicture alt="My profile picture" src="/profile-picture.jpg" @click="useRouter.push({ path: '/' })"/>
    <h4 @click="useRouter.push({ path: '/' })">Research, Build, Resist.</h4>
    <div class="icons">
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
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  height: 100px;
  align-items: center;
  transition: 0.3s all ease;

  * {
    transition: 0.3s all ease;
  }

  img {
    border-radius: 20px;
    height: 100px;
    width: 100px;
    cursor: pointer;
  }

  h4 {
    color: $color-accent;
    font-size: 32px;
    cursor: pointer;
  }

  .icons {
    width: 100px;
    display: flex;
    gap: 10px;
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
    height: 90px;
    backdrop-filter: blur(10px);
    box-shadow: $box-shadow-primary;


    & img {
      height: 70px;
      width: 70px;
      margin-left: 15px;
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

    & img {
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