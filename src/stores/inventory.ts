import { defineStore, acceptHMRUpdate } from 'pinia';

export interface IItem {
  id: number,
  name: string,
  description: string,
  iconName: string,
  quantity: number
};

const maxItemsCount = 25;

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    items: {
      0: {
        id: 0,
        name: "Предмет 1",
        description: "Это предмет 1.",
        iconName: "item1",
        quantity: 4
      },
      1: {
        id: 1,
        name: "Предмет 2",
        description: "Это предмет 2.",
        iconName: "item2",
        quantity: 2
      },
      2: {
        id: 2,
        name: "Предмет 3",
        description: "Это предмет 3.",
        iconName: "item3",
        quantity: 5
      }
    } as { [key: number]: IItem },
    itemsCount: 3,
    cellDragImage: undefined as (HTMLDivElement | undefined),
    cellDragImageImg: undefined as (HTMLImageElement | undefined)
  }),
  getters: {
    *itemsDisplay(state) {
      let remainingCount = state.itemsCount;
      for (let i = 0; i < maxItemsCount; i++) {
        if (remainingCount > 0) {
          yield state.items[i];
          remainingCount--;
        }
        else {
          yield undefined;
        }
      }
    }
  },
  actions: {
    canRemoveItemQuantity(itemPos: number, quantity: number) {
      const item = this.items[itemPos];
      if (item === undefined) return false;

      return (item.quantity - quantity) >= 0;
    },
    removeItemQuantity(itemPos: number, quantity: number) {
      const item = this.items[itemPos];
      if (item === undefined) return false;

      const newQuantity = item.quantity - quantity;
      const isLast = newQuantity === 0;
      if (isLast) {
        delete this.items[itemPos];
        this.itemsCount--;
      }
      else
        item.quantity = newQuantity;

      return isLast;
    },
    moveItem(srcPos: number, destPos: number) {
      const item = this.items[srcPos];
      if (item === undefined) return;

      this.items[srcPos] = this.items[destPos];
      this.items[destPos] = item;
    },

    getImgUrl(name: string | undefined) {
      if (name === undefined) return "";
  
      return require('../assets/' + name);
    }
  },
  persist: {
    storage: localStorage,
    paths: [ 'items', 'itemsCount' ]
  }
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(acceptHMRUpdate(useInventoryStore, import.meta.webpackHot));
}