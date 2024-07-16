<template>
  <div class="cont">
    <div class="image-cont">
      <div class="img-cont">
        <img class="img" src="@/assets/bg.png" />
      </div>
      <div class="skeleton">
        <div class="header"></div>

        <div class="main-cont">
          <div style="width: 155px;"></div>
          <div style="width: 190px;"></div>
          <div style="width: 170px;"></div>
          <div style="width: 160px;"></div>
          <div style="width: 140px;"></div>

          <div class="bottom" style="width: 80px;"></div>
        </div>
      </div>
    </div>

    <div class="grid-cont">
      <Cell v-for="(item, pos) in inventory.itemsDisplay" :key="item?.id"
            :position="pos" :item />
    </div>

    <div ref="someCont" class="some-cont">
      <div class="placeholder"></div>
      <div class="close-button" @click="closeClickHandler">
        <svg>
          <path d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z" fill="white"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useInventoryStore } from '../stores/inventory';
  import Cell from '../components/Cell.vue';

  const inventory = useInventoryStore();

  const someCont = ref<HTMLDivElement>();

  /*const cellDragImage = new HTMLDivElement();
  cellDragImage.className = 'cell-image';*/

  const closeClickHandler = () => {
    someCont.value?.remove();
  };
</script>

<style scoped lang="scss">
  @use '../scss/variables' as *;

  .cont {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: $gap;
    margin: 32px;
    width: fit-content;
    height: fit-content;

    > div {
      box-shadow: inset 0 0 0 $border-width $border-color;
      border-radius: $main-radius;
      background-color: $light-dark;
    }
  }

  .image-cont {
    grid-column: 1;
    grid-row: 1;

    padding: $content-padding;

    .img-cont {
      width: 208px;
      height: 240px;
      overflow: hidden;
      border-radius: $image-radius;

      .img {
        width: 208px;
        height: 240px;
        filter: blur(4px);
      }
    }

    .skeleton {
      padding-top: $content-padding;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      .header {
        border-radius: 8px;
        width: 190px;
        height: 26px;
        background: $skeleton-gradient;
      }

      .main-cont {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        > div {
          border-radius: 4px;
          height: 10px;
          background: $skeleton-gradient;
        }

        .bottom {
          margin: 8px 0px 6px 0px;
        }
      }
    }
  }
  
  .grid-cont {
    grid-column: 2;
    grid-row: 1;

    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow: hidden;
    padding: $border-width 0px 0px $border-width;
    width: ($cell-size + 1px) * 5 + 1px;

    > div {
      width: $cell-size;
      height: $cell-size;
      border: $border-width solid $border-color;
      margin-top: -$border-width;
      margin-left: -$border-width;
    }
  }
  .cell-image {
    background-color: $light-dark;
    border: $border-width solid $border-color;
    border-radius: $cell-image-radius;
  }

  .some-cont {
    grid-column: 1 / span 2;
    grid-row: 2;

    padding: $content-padding;
    display: flex;
    position: relative;

    .placeholder {
      width: 699px;
      height: 36px;
      border-radius: $main-radius;
      background: $skeleton-gradient;
    }

    .close-button {
      width: 24px;
      height: 24px;

      position: absolute;
      right: 6px;
      top: 6px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      > svg {
        width: 12px;
        height: 12px;
      }
    }
  }
</style>  