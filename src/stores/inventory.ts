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
    items: new Map<number, IItem>([
      [0, {
        id: 0,
        name: "Предмет 1",
        description: "Это предмет 1.",
        iconName: "item1",
        quantity: 4
      }],
      [1, {
        id: 1,
        name: "Предмет 2",
        description: "Это предмет 2.",
        iconName: "item2",
        quantity: 2
      }],
      [2, {
        id: 2,
        name: "Предмет 3",
        description: "Это предмет 3.",
        iconName: "item3",
        quantity: 5
      }]
    ])
  }),
  getters: {
    *itemsDisplay(state) {
      let remainingCount = state.items.size;
      for (let i = 0; i < maxItemsCount; i++) {
        if (remainingCount > 0) {
          yield state.items.get(i);
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
      const item = this.items.get(itemPos);
      if (item === undefined) return false;

      return (item.quantity - quantity) >= 0;
    },
    removeItemQuantity(itemPos: number, quantity: number) {
      const item = this.items.get(itemPos);
      if (item === undefined) return false;

      const newQuantity = item.quantity - quantity;
      const isLast = newQuantity === 0;
      if (isLast)
        this.items.delete(itemPos);
      else
        item.quantity = newQuantity;

      return isLast;
    },
    moveItem(srcPos: number, destPos: number) {
      const item = this.items.get(srcPos);
      if (item === undefined) return;

      this.items.delete(srcPos);
      this.items.set(destPos, item);
    },

    getImgUrl(name: string | undefined) {
      if (name === undefined) return "";
  
      return require('../assets/' + name);
    }
  },
  persist: true
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(acceptHMRUpdate(useInventoryStore, import.meta.webpackHot));
}