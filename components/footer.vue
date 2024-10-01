<template>
  <footer>
    <p>Unless otherwise noted, all text content is licensed under the CC-BY-NC-SA license, and all code is licensed under the AGPL 3.0 license. 🍓</p>
    <p>Made with ☕ in 🇫🇷</p>
  </footer>
</template>

<style lang="scss" scoped>
@import "/assets/scss/variables.scss";  

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 20px;
  background-color: $color-background-secondary;
  color: $color-text-primary;
  margin-top: 50px;

  p {
    margin: 10px;
    width: min(800px, 80vw)
  }
}

@media screen and (max-width: 768px) {
  
}
</style>