<template>
  <div class="cell-cont" :data-isNotEmpty="isNotEmpty"
       v-on="isNotEmpty ? cellEvents : {}"
       @dragover="dragOverHandler" @drop="dropHandler"
       :draggable="isNotEmpty">
    <img v-if="isNotEmpty" class="icon" draggable="false"
         :src="getImgUrl(`${item?.iconName}_small.png`)" />

    <div v-if="isNotEmpty" class="quantity-cont" draggable="false">
      <div class="quantity-label">{{ item?.quantity ?? 0 }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  let srcCellPos: number | null = null;
</script>

<script setup lang="ts">
  import { computed, PropType } from 'vue';
  import { useInventoryStore, IItem } from '../stores/inventory';
  import { storeToRefs } from 'pinia';

  const inventory = useInventoryStore();
  const { getImgUrl } = inventory;
  const { cellDragImage, cellDragImageImg } = storeToRefs(inventory);

  const props = defineProps({
    position: {
      type: Number,
      required: true
    },
    item: {
      type: Object as PropType<IItem>,
      required: false
    }
  });

  const emit = defineEmits<{
    'click': [itemPos: number]
  }>();

  const isNotEmpty = computed(() => props.item !== undefined);

  const clickHandler = (ev: MouseEvent) => {
    
  };

  //#region Drag&drop
  const dragStartHandler = (ev: DragEvent) => {
    if (ev.dataTransfer === null || props.item?.iconName === undefined
        || cellDragImage.value === undefined || cellDragImageImg.value === undefined) {
      return;
    }

    const mousePos = { x: ev.offsetX, y: ev.offsetY };
    cellDragImageImg.value.src = getImgUrl(`${props.item.iconName}_small.png`);
    ev.dataTransfer.setDragImage(cellDragImage.value, mousePos.x, mousePos.y);
    ev.dataTransfer.effectAllowed = "move";
    srcCellPos = props.position;
  };
  const dragEndHandler = (ev: DragEvent) => {
    if (ev.dataTransfer === null) return;

    srcCellPos = null;
  };

  const dragOverHandler = (ev: DragEvent) => {
    if (srcCellPos === null) {
      if (ev.dataTransfer !== null)
        ev.dataTransfer.dropEffect = "none";
    }
    else if (srcCellPos !== props.position)
      ev.preventDefault();
  };

  const dropHandler = (ev: DragEvent) => {
    if (srcCellPos !== null)
      inventory.moveItem(srcCellPos, props.position);
  };
  //#endregion

  const cellEvents = {
    click: clickHandler,
    dragstart: dragStartHandler,
    dragend: dragEndHandler
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

    > * {
      pointer-events: none; // fixes invalid drag icon at the edge/border
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
