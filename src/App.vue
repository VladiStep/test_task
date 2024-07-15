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
  @use 'scss/variables';

  body {
    font-family: variables.$default-font;
    background-color: variables.$dark;
  }
  #app {
    
  }
</style>
