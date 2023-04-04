import { defineStore } from 'pinia';

export const bookingStore = defineStore({
  id: 'booking',
  state: () => ({
    returnTrip: true,
    type: 'from-a-to-b',
  }),
  actions: {
    setReturnTrip(value) {
      this.returnTrip = value;
    },
    setType(value) {
      this.type = value;
    },
  },
});