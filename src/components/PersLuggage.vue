<script>
    import { computed } from 'vue';
    import { useBookingStore } from '@/store/bookingStore';

    export default {
        data() {
            return {
                open: false,
                bike: 0,
                golf: 0,
                sport: 0,
                ski: 0,
                music: 0,
                infant: 0,
            }
        },
        setup() {
            const booking = useBookingStore();
            const car = computed(() => booking.car);

            return {
                booking,
                car,
            };
        },
        methods: {
            decrementBike() {
                this.bike > 0 && this.bike--
            },
            incrementBike() {
                this.bike < 9 && this.bike++
            },
            decrementGolf() {
                this.golf > 0 && this.golf--
            },
            incrementGolf() {
                this.golf < 9 && this.golf++
            },
            decrementSport() {
                this.sport > 0 && this.sport--
            },
            incrementSport() {
                this.sport < 9 && this.sport++
            },
            decrementSki() {
                this.ski > 0 && this.ski--
            },
            incrementSki() {
                this.ski < 9 && this.ski++
            },
            decrementMusic() {
                this.music > 0 && this.music--
            },
            incrementMusic() {
                this.music < 9 && this.music++
            },
            decrementInfant() {
                this.infant > 0 && this.infant--
            },
            incrementInfant() {
                this.infant < 9 && this.infant++
            },
        }
    }
</script> 

<template>
    <div class="book-pers">
        <div class="book-pers__top">
            <div class="book-pers__top-left">
                <img src="/luggage.svg" alt="" draggable="false" />
                <div class="book-pers__top-content">
                    <p class="book-pers__title">Extra luggage</p>
                    <p class="book-pers__p book-pers__p_green">This option is only available for Van classes</p>
                </div>
            </div>
            <div class="book-widget__checkbox-input" v-if="car.type === 'van'">
                <input type="checkbox" v-model="open" />
                <div class="book-widget__checkbox-overlay">
                <div></div>
                </div>
            </div>
        </div>
        <div class="book-pers__bot" v-if="open && car.type === 'van'">
            <div class="book-pers__field">
                <div class="book-pers__field-counter">
                    <div class="book-pers__field-counter-left">
                        <p>Bike</p>
                    </div>
                    <div class="book-action__counter">
                        <button class="book-action__counter-decrement" @click="decrementBike">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                            </svg>
                        </button>
                        <span>{{ bike }}</span>
                        <button class="book-action__counter-increment" @click="incrementBike">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="book-pers__field-counter">
                    <div class="book-pers__field-counter-left">
                        <p>Golf clubs</p>
                    </div>
                    <div class="book-action__counter">
                        <button class="book-action__counter-decrement" @click="decrementGolf">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                            </svg>
                        </button>
                        <span>{{ golf }}</span>
                        <button class="book-action__counter-increment" @click="incrementGolf">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="book-pers__field-counter">
                    <div class="book-pers__field-counter-left">
                        <p>Sport Equipment</p>
                    </div>
                    <div class="book-action__counter">
                        <button class="book-action__counter-decrement" @click="decrementSport">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                            </svg>
                        </button>
                        <span>{{ sport }}</span>
                        <button class="book-action__counter-increment" @click="incrementSport">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="book-pers__field-counter">
                    <div class="book-pers__field-counter-left">
                        <p>Ski Equipment</p>
                    </div>
                    <div class="book-action__counter">
                        <button class="book-action__counter-decrement" @click="decrementSki">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                            </svg>
                        </button>
                        <span>{{ ski }}</span>
                        <button class="book-action__counter-increment" @click="incrementSki">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="book-pers__field-counter">
                    <div class="book-pers__field-counter-left">
                        <p>Musical Instrument</p>
                    </div>
                    <div class="book-action__counter">
                        <button class="book-action__counter-decrement" @click="decrementMusic">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                            </svg>
                        </button>
                        <span>{{ music }}</span>
                        <button class="book-action__counter-increment" @click="incrementMusic">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="book-pers__field-counter">
                    <div class="book-pers__field-counter-left">
                        <p>Infant/Child Equipment</p>
                    </div>
                    <div class="book-action__counter">
                        <button class="book-action__counter-decrement" @click="decrementInfant">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                            </svg>
                        </button>
                        <span>{{ infant }}</span>
                        <button class="book-action__counter-increment" @click="incrementInfant">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>