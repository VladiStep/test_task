<template>
  <div class="cell-cont" :data-isNotEmpty="isNotEmpty"
       @click="isNotEmpty ? clickHandler : null">
    <img v-if="isNotEmpty" class="icon" :src="getImgUrl(`${item?.iconName}_54px.png`)" />

    <div v-if="isNotEmpty" class="quantity-cont">
      <div class="quantity-label">{{ item?.quantity }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue';
  import { IItem } from '../stores/inventory';

  const props = defineProps({
    position: Number,
    item: Object as PropType<IItem>
  });

  const isNotEmpty = computed(() => props.item !== undefined);

  const getImgUrl = (name: string | undefined) => {
    if (name === undefined) return "";

    return require('../assets/' + name);
  }

  const clickHandler = (ev: MouseEvent) => {
    
  };
</script>

<style scoped lang="scss">
  @use '../scss/variables' as *;

  .cell-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &[data-isNotEmpty=true] {
      cursor: pointer;

      &:hover {
        background-color: $light-dark-hover;
      }
    }
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
