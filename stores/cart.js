import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    positions: [],
    deliveryMethod: 'self',
    phone: '',
    name: '',
    info: '',
  }),
  getters: {
    positionsExtended: (state) => {
      return state.positions.map(position => ({
        ...position,
        totalPrice: position.price * position.quantity,
      }));
    },
    positionsPrice: (state) => {
      return state.positionsExtended
        .reduce((acc, item) => acc + item.totalPrice, 0);
    },
    totalCartPrice: (state) => {
      return Math.round(state.positionsPrice * 0.9);
    },
  },
  actions: {
    addPositionToCart(position) {
      this.positions.push({
        ...position,
        quantity: 1,
      });
    },
    setPositionQuantity(id, count) {
      if (Number(count) === 0) {
        this.deletePosition(id);
        return;
      }

      const positionIndex = this.positions.findIndex((position) => position.id === id);

      if (~positionIndex) {
        this.positions[positionIndex].quantity = count;
      }
    },
    deletePosition(id) {
      this.positions = this.positions.filter(position => position.id !== id);
    },
    setDeliveryMethod(value) {
      this.deliveryMethod = value;
    },
    setPhone(value) {
      this.phone = value;
    },
    setName(value) {
      this.name = value;
    },
  },
});
