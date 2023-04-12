<script>
    import { computed } from 'vue'
    import { useBookingStore } from '@/store/bookingStore'

    export default {
        setup() {
            const booking = useBookingStore()
            const mapOpen = computed(() => booking.mapOpen)

            function toggleMap() {
                booking.setMapOpen(!mapOpen.value);
            }

            return {
                toggleMap,
                mapOpen,
            }
        },
        data() {
            return {
                open: false,
                inputvalue: ''
            }
        },
    }
</script>

<template>
    <div class="book-pers">
        <div class="book-pers__top">
            <div class="book-pers__top-left">
                <img src="/map.png" alt="" draggable="false" />
                <div class="book-pers__top-content">
                    <p class="book-pers__title">Extra stop</p>
                    <p class="book-pers__p book-pers__p_green">An additional fee is 20.00€</p>
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
            <!-- bez knopok udalit item --> 
            <div class="book-pers__stop nominus">
                <div class="book-widget__location-solo df">
                    <div class="book-widget__location-wrapper">
                        <input type="text" v-model="inputvalue" placeholder="Pickup location">
                        <button class="book-widget__location-show" v-if="inputvalue.length > 0" @click="toggleMap">show on map</button>
                    </div>
                </div>
                <!-- <button class="book-pers__stop-des">-</button> -->
            </div>
            <!-- s knopkoy udalit item --> 
            <!-- <div class="book-pers__stop">
                <div class="book-widget__location-solo df">
                    <div class="book-widget__location-wrapper">
                        <input type="text" v-model="inputvalue" placeholder="Pickup location">
                        <button class="book-widget__location-show" v-if="inputvalue.length > 0" @click="toggleMap">show on map</button>
                    </div>
                </div>
                <button class="book-pers__stop-des">-</button>
            </div> -->
            <button class="book-pers__add">+ Extra stop</button>
        </div>
    </div>
</template>