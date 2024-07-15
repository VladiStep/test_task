<template>
 <div class="cell-cont">

 </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import { IItem } from '../stores/inventory';

  const props = defineProps({
    position: Number,
    item: Object as PropType<IItem> 
  });
</script>

<style scoped lang="scss">
 .cell-cont {

 }
</style>