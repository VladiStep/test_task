<template>
  <Inventory />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Inventory from './components/Inventory.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Inventory
    }
  });
</script>

<style lang="scss">
  @use 'scss/variables' as *;

  body {
    margin: 8px;
    padding: 0px;

    font-family: $default-font;
    background-color: $dark;
  }
  #app {

  }
</style>
