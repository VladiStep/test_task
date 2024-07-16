<template>
  <Inventory />
</template>

<script setup lang="ts">
  import Inventory from './components/Inventory.vue';
</script>

<style lang="scss">
  @use 'scss/variables' as *;

  body {
    margin: 0px;
    padding: 0px;

    font-family: $default-font;
    background-color: $dark;
  }
  #app {

  }

  @font-face {
    font-family: Inter;
    src: url("@/fonts/Inter-Regular.ttf");
  }
</style>
