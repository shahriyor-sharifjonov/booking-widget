<script>
import { computed, watch } from 'vue';
import { useBookingStore } from '@/store/bookingStore';

export default {
    setup(props) {
        const booking = useBookingStore();
        const passengersNum = computed(() => booking.passengers);
        const suitcasesNum = computed(() => booking.suitcases);
        const returnTrip = computed(() => booking.returnTrip);
        const selected = computed(() => booking.car.id === props.id);
        const car = computed(() => booking.car);

        const onClick = () => {
            booking.setCar(props);
        };

        watch((suitcasesNum), (newValue, oldValue) => {
            const suit = car.value.suitcases;
            if(suit && suit < newValue) {
                booking.setCar({});
            }
        });

        watch((passengersNum), (newValue, oldValue) => {
            const pass = car.value.passengers;
            if(pass && pass < newValue) {
                booking.setCar({});
            }
        });

        return {
            booking,
            passengersNum,
            suitcasesNum,
            returnTrip,
            selected,
            onClick,
        };
    },
    props: {
        id: {
            type: Number,
            required: true,
        },
        img: {
            type: String,
            required: true
        },
        carclass: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        passengers: {
            type: String,
            required: true,
        },
        suitcases: {
            type: String,
            required: true,
        },
    }
};
</script>

<template>
    <button class="book-car" :class="{ 'book-car_unactive': passengers < passengersNum || suitcases < suitcasesNum, 'book-car_active': selected }" @click="onClick">
        <div class="book-car__img">
            <img :src="img" alt="" draggable="false" />
        </div>
        <div class="book-car__content">
            <div class="book-car__title">
                <span>{{ carclass }}</span>
                <span>${{ price }}</span>
            </div>
            <div class="book-car__desc">{{ name }}</div>
            <div class="book-car__bot">
                <div class="book-car__row">
                    <div class="book-car__item">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_6_222)">
                            <path d="M7.5 3C8.08016 3 8.63656 3.23047 9.0468 3.6407C9.45703 4.05094 9.6875 4.60734 9.6875 5.1875C9.6875 5.76766 9.45703 6.32406 9.0468 6.7343C8.63656 7.14453 8.08016 7.375 7.5 7.375C6.91984 7.375 6.36344 7.14453 5.9532 6.7343C5.54297 6.32406 5.3125 5.76766 5.3125 5.1875C5.3125 4.60734 5.54297 4.05094 5.9532 3.6407C6.36344 3.23047 6.91984 3 7.5 3ZM3.125 4.5625C3.475 4.5625 3.8 4.65625 4.08125 4.825C3.9875 5.71875 4.25 6.60625 4.7875 7.3C4.475 7.9 3.85 8.3125 3.125 8.3125C2.62772 8.3125 2.15081 8.11496 1.79917 7.76333C1.44754 7.41169 1.25 6.93478 1.25 6.4375C1.25 5.94022 1.44754 5.46331 1.79917 5.11167C2.15081 4.76004 2.62772 4.5625 3.125 4.5625ZM11.875 4.5625C12.3723 4.5625 12.8492 4.76004 13.2008 5.11167C13.5525 5.46331 13.75 5.94022 13.75 6.4375C13.75 6.93478 13.5525 7.41169 13.2008 7.76333C12.8492 8.11496 12.3723 8.3125 11.875 8.3125C11.15 8.3125 10.525 7.9 10.2125 7.3C10.7574 6.59651 11.0104 5.71012 10.9187 4.825C11.2 4.65625 11.525 4.5625 11.875 4.5625ZM3.4375 10.9688C3.4375 9.675 5.25625 8.625 7.5 8.625C9.74375 8.625 11.5625 9.675 11.5625 10.9688V12.0625H3.4375V10.9688ZM0 12.0625V11.125C0 10.2562 1.18125 9.525 2.78125 9.3125C2.4125 9.7375 2.1875 10.325 2.1875 10.9688V12.0625H0ZM15 12.0625H12.8125V10.9688C12.8125 10.325 12.5875 9.7375 12.2188 9.3125C13.8187 9.525 15 10.2562 15 11.125V12.0625Z"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_6_222">
                            <rect width="15" height="15" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span class="book-car__item-passengers">{{ passengers }}</span>
                    </div>
                    <div class="book-car__item">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.75C5 3.25272 5.19754 2.77581 5.54917 2.42417C5.90081 2.07254 6.37772 1.875 6.875 1.875H8.125C8.62228 1.875 9.09919 2.07254 9.45083 2.42417C9.80246 2.77581 10 3.25272 10 3.75V13.125H5V3.75ZM3.75 4.375H3.125C2.62772 4.375 2.15081 4.57254 1.79917 4.92417C1.44754 5.27581 1.25 5.75272 1.25 6.25V11.25C1.25 11.7473 1.44754 12.2242 1.79917 12.5758C2.15081 12.9275 2.62772 13.125 3.125 13.125H3.75V4.375ZM11.25 13.125H11.875C12.3723 13.125 12.8492 12.9275 13.2008 12.5758C13.5525 12.2242 13.75 11.7473 13.75 11.25V6.25C13.75 5.75272 13.5525 5.27581 13.2008 4.92417C12.8492 4.57254 12.3723 4.375 11.875 4.375H11.25V13.125ZM6.25 4.375H8.75V3.75C8.75 3.58424 8.68415 3.42527 8.56694 3.30806C8.44973 3.19085 8.29076 3.125 8.125 3.125H6.875C6.70924 3.125 6.55027 3.19085 6.43306 3.30806C6.31585 3.42527 6.25 3.58424 6.25 3.75V4.375Z"/>
                        </svg>
                        <span class="book-car__item-suitcases">{{ suitcases }}</span>
                    </div>
                </div>
                <div class="book-car__type" v-if="returnTrip">Round trip</div>
                <div class="book-car__type" v-if="!returnTrip">One way</div>
            </div>
        </div>
    </button>
</template>