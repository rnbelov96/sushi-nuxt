import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteList: [],
  }),
  getters: {
    isFavorite: (state) => (id) => state.favoriteList.includes(id),
  },
  actions: {
    toggleFavorite(id) {
      if (this.isFavorite(id)) {
        this.favoriteList = this.favoriteList.filter((favoriteId) => favoriteId !== id);
      } else {
        this.favoriteList.push(id);
      }

      this.saveFavoritesToLocalStorage();
    },
    saveFavoritesToLocalStorage() {
      localStorage.setItem('favorites', JSON.stringify(this.favoriteList));
    },
    getFavoritesFromLocalStorage() {
      if (localStorage.getItem('favorites')) {
        this.favoriteList = JSON.parse(localStorage.getItem('favorites'));
      }
    },
  },
});
