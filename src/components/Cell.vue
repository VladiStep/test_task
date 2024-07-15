<template>
  <div class="cell-cont">
    <img class="icon" :src="getImgUrl(item?.iconName)" />

    <div class="quantity-cont"></div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from "vue";
  import { IItem } from "../stores/inventory";

  const props = defineProps({
    position: Number,
    item: Object as PropType<IItem>
  });

  const getImgUrl = (name: string | undefined) => {
    if (name === undefined) return "";

    return require('../assets/' + name);
  }
</script>

<style scoped lang="scss">
  .cell-cont {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 54px;
    height: 54px;
  }

  .quantity-cont {

  }
</style>
