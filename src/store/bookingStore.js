import { defineStore } from 'pinia'

export const useBookingStore = defineStore("booking", {
    state: () => ({
        type: "from-a-to-b",
        returnTrip: true,
        suitcases: 0,
        passengers: 1,
        cars: [
            {
                id: 0,
                class: "Economy Class",
                name: "Skoda Octavia",
                type: "sedan",
                passengers: 4,
                suitcases: 4,
                price: 477,
            },
            {
                id: 1,
                class: "Business Class",
                name: "Mercedes Benz E Class",
                type: "sedan",
                passengers: 3,
                suitcases: 2,
                price: 631.00,
            },
            {
                id: 3,
                class: "First Class",
                name: "Mercedes Benz S Class",
                type: "sedan",
                passengers: 3,
                suitcases: 2,
                price: 875.00,
            },
            {
                id: 4,
                class: "Economy Van",
                name: "Mercedes Benz Vito",
                type: "van",
                passengers: 6,
                suitcases: 6,
                price: 618.00,
            },
            {
                id: 5,
                class: "Business Van",
                name: "Mercedes Benz V Class",
                type: "van",
                passengers: 6,
                suitcases: 6,
                price: 760.00,
            },
            {
                id: 6,
                class: "Economy Van+",
                name: "Mercedes Benz Vito Extra Long",
                type: "van",
                passengers: 8,
                suitcases: 6,
                price: 644.00,
            },
        ]
    }),
    getters: {
        getSuitcases() {
            return this.suitcases
        },
        getPassengers() {
            return this.passengers
        },
        getType() {
            return this.type
        },
        getReturnTrip() {
            return this.returnTrip
        }
    },
    actions: {
        setSuitcases(value) {
            this.suitcases = value
        },
        setPassengers(value) {
            this.passengers = value
        },
        setType(value) {
            this.type = value
        },
        setReturnTrip(value) {
            this.returnTrip = value
        }
    }
})
