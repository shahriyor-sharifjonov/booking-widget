import { defineStore } from 'pinia'

export const useBookingStore = defineStore("booking", {
    state: () => ({
        type: "from-a-to-b",
        returnTrip: false,
        mapOpen: false,
        // fromAToB: {
        //     pickup: "",
        //     dropoff: "",
        //     date: "",
        //     time: "",
        //     returnTrip: {
        //         pickup: "",
        //         dropoff: "",
        //         date: "",
        //         time: ""
        //     }
        // },
        // hourlyRide: {
        //     pickup: "",
        //     time: ""
        // },
        suitcases: 0,
        passengers: 1,
        cars: [
            {
                id: 0,
                carclass: "Economy Class",
                name: "Skoda Octavia",
                type: "sedan",
                passengers: "4",
                suitcases: "4",
                price: "477.00",
                img: "/skoda-octavia.png"
            },
            {
                id: 1,
                carclass: "Business Class",
                name: "Mercedes Benz E Class",
                type: "sedan",
                passengers: "3",
                suitcases: "2",
                price: "631.00",
                img: "/skoda-octavia.png"
            },
            {
                id: 3,
                carclass: "First Class",
                name: "Mercedes Benz S Class",
                type: "sedan",
                passengers: "3",
                suitcases: "2",
                price: "875.00",
                img: "/skoda-octavia.png"
            },
            {
                id: 4,
                carclass: "Economy Van",
                name: "Mercedes Benz Vito",
                type: "van",
                passengers: "6",
                suitcases: "6",
                price: "618.00",
                img: "/skoda-octavia.png"
            },
            {
                id: 5,
                carclass: "Business Van",
                name: "Mercedes Benz V Class",
                type: "van",
                passengers: "6",
                suitcases: "6",
                price: "760.00",
                img: "/skoda-octavia.png"
            },
            {
                id: 6,
                carclass: "Economy Van+",
                name: "Mercedes Benz Vito Extra Long",
                type: "van",
                passengers: "8",
                suitcases: "6",
                price: "644.00",
                img: "/skoda-octavia.png"
            },
        ],
        car: {},
    }),
    getters: {
        // getFromAToB() {
        //     return this.fromAToB
        // },
        // getHourlyRide() {
        //     return this.hourlyRide
        // },
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
        },
        getCar() {
            return this.car.id
        }
    },
    actions: {
        // setFromAToB(value) {
        //     this.fromAToB = value 
        // },
        // setHourlyRide(value) {
        //     this.hourlyRide = value 
        // },
        setMapOpen(value) {
            this.mapOpen = value
        },
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
        },
        setCar(value) {
            this.car = value 
        }
    }
})
