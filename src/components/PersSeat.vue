<script>
    export default {
        data() {
            return {
                open: false,
                babyChair: 0,
                booster: 0,
                infant: 0,
            }
        },
        methods: {
            decrementBabyChair() {
                this.babyChair > 0 && this.babyChair--
            },
            incrementBabyChair() {
                this.babyChair < 9 && this.babyChair++
            },
            decrementBooster() {
                this.booster > 0 && this.booster--
            },
            incrementBooster() {
                this.booster < 9 && this.booster++
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
                <img src="/seat.svg" alt="" draggable="false" />
                <div class="book-pers__top-content">
                    <p class="book-pers__title">I require a child seat</p>
                    <p class="book-pers__p book-pers__p_green">For an extra fee - 4.00€ per unit</p>
                </div>
            </div>
            <div class="book-widget__checkbox-input">
                <input type="checkbox" v-model="open" />
                <div class="book-widget__checkbox-overlay">
                <div></div>
                </div>
            </div>
        </div>
        <div class="book-pers__bot" v-if="open">
            <div class="book-pers__field">
                <div class="book-pers__field-counter">
                    <div class="book-pers__field-counter-left">
                        <p>Baby seat</p>
                        <p>0-3 years</p>
                    </div>
                    <div class="book-action__counter">
                        <button class="book-action__counter-decrement" @click="decrementBabyChair">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                            </svg>
                        </button>
                        <span>{{ babyChair }}</span>
                        <button class="book-action__counter-increment" @click="incrementBabyChair">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="book-pers__field-counter">
                    <div class="book-pers__field-counter-left">
                        <p>Child seat</p>
                        <p>3-11 years</p>
                    </div>
                    <div class="book-action__counter">
                        <button class="book-action__counter-decrement" @click="decrementBooster">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                            </svg>
                        </button>
                        <span>{{ booster }}</span>
                        <button class="book-action__counter-increment" @click="incrementBooster">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- <div class="book-pers__field-counter">
                    <div class="book-pers__field-counter-left">
                        <p>Infant seat</p>
                        <p>Weight: up to 9 kg</p>
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
                </div> -->
            </div>
        </div>
    </div>
</template>