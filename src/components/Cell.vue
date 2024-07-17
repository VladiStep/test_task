<template>
  <div class="cell-cont" :data-isNotEmpty="isNotEmpty"
       @click="isNotEmpty ? clickHandler : null"
       :draggable="isNotEmpty">
    <img v-if="isNotEmpty" class="icon" draggable="false"
         :src="getImgUrl(`${item?.iconName}_small.png`)" />

    <div v-if="isNotEmpty" class="quantity-cont" draggable="false">
      <div class="quantity-label">{{ item?.quantity }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue';
  import { useInventoryStore, IItem } from '../stores/inventory';

  const { getImgUrl } = useInventoryStore();

  const props = defineProps({
    position: Number,
    item: Object as PropType<IItem>
  });

  const isNotEmpty = computed(() => props.item !== undefined);

  const clickHandler = (ev: MouseEvent) => {
    
  };
</script>

<style scoped lang="scss">
  @use '../scss/variables.module' as *;

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
    width: $cell-image-size;
    height: $cell-image-size;
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
