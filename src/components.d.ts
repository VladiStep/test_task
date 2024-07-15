// Сделать глобальные компоненты доступными в Visual Studio Code (Volar)

import Inventory from './components/Inventory.vue';
import Cell from './components/Cell.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Inventory: typeof Inventory,
    Cell: typeof Cell
  }
}