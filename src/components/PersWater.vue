<script>
    export default {
        data() {
            return {
                open: false,
                water: 0,
            }
        },
        methods: {
            decrementWater() {
                this.water > 0 && this.water--
            },
            incrementWater() {
                this.water < 9 && this.water++
            },
        }
    }
</script>

<template>
    <div class="book-pers">
        <div class="book-pers__top">
            <div class="book-pers__top-left">
                <img src="/water.svg" alt="" draggable="false" />
                <div class="book-pers__top-content">
                    <p class="book-pers__title">A bottle of water</p>
                    <p class="book-pers__p book-pers__p_green">2.00€ per unit</p>
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
                        <p>500ml</p>
                    </div>
                    <div class="book-action__counter">
                        <button class="book-action__counter-decrement" @click="decrementWater">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                            </svg>
                        </button>
                        <span>{{ water }}</span>
                        <button class="book-action__counter-increment" @click="incrementWater">
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