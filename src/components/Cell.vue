<template>
  <div class="cell-cont">
    <img v-if="item !== undefined"
         class="icon" :src="getImgUrl(`${item?.iconName}_54px.png`)" />

    <div v-if="item !== undefined" class="quantity-cont">
      <div class="quantity-label">{{ item?.quantity }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import { IItem } from '../stores/inventory';

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
  @use '../scss/variables' as *;

  .cell-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .icon {
    width: 54px;
    height: 54px;
  }

  .quantity-cont {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0px;
    bottom: 0px;

    width: 16px;
    height: 16px;

    border-color: $border-color;
    border-style: solid;
    border-width: 1px 0px 0px 1px;
    border-top-left-radius: 6px;
    box-sizing: border-box;

    .quantity-label {
      font-family: Inter;
      font-size: 10px;
      color: #7d7d7d;
      font-weight: 500;
    }
  }
</style>
