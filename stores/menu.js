import { defineStore } from 'pinia';
import menu from '../mocks/menu.json';
import normalizeMenuPosition from '~/common/helpers/normalize-menu-position';
import menuTypes from '~/common/enums/menu-types';
import { useCartStore } from './cart';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: [],
    currentTypeId: null,
  }),
  getters: {
    normalizedMenu: (state) => state.menu.map(position => normalizeMenuPosition(position)),
    typeList: (state) => {
      return [...state.menu.reduce((acc, value) => acc.add(value.type), new Set())].map((typeId => ({ id: typeId, name: menuTypes[typeId] })));
    },
    filteredMenu: (state) => {
      return state.menu
        .filter((item) => {
          return state.currentTypeId === null ? true : item.type === state.currentTypeId;
        })
        .map(position => normalizeMenuPosition(position));
    },
    menuExtended: (state) => {
      const cartStore = useCartStore();

      return state.filteredMenu.map((position) => {
        return {
          ...position,
          quantity: cartStore.positions.find(item => item.id === position.id)?.quantity ?? 0,
        };
      });
    },
  },
  actions: {
    async fetchMenu() {
      const { data: fetchedMenu, pending, error } = await useFetch('https://api.com/menu');

      if (error) {
        this.menu = menu;
        return;
      }

      this.menu = fetchedMenu;
    },
    setCurrentType(newTypeId) {
      this.currentTypeId = this.currentTypeId === newTypeId ? null : newTypeId;
    },
  },
});
