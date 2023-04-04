import { defineStore } from 'pinia'

export const useBookingStore = defineStore("booking", {
    state: () => ({
        type: "from-a-to-b",
        returnTrip: true,
    }),
    getters: {
        getType() {
            return this.type
        },
        getReturnTrip() {
            return this.returnTrip
        }
    },
    actions: {
        setType(value) {
            this.type = value
        },
        setReturnTrip(value) {
            this.returnTrip = value
        }
    }
})