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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
