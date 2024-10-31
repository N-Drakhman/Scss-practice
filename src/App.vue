<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Button">Button</RouterLink>
    <RouterLink to="/Card">Card</RouterLink>
    <RouterLink to="/Text">Text</RouterLink>
    <RouterLink to="/Colors">Colors</RouterLink>
    <RouterLink to="/Padding">Padding</RouterLink>
    <RouterLink to="/FontSize">Font-Size</RouterLink>

  </nav>
  <div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}

nav {
  & {
    // position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    margin-bottom: 2rem;
    
  }

  & * {
    justify-content: space-between;
    padding: 12px;
    font-size: 22px;
  }
}
</style>
