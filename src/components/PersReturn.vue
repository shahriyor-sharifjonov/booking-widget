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
                open: false
            }
        },
    }
</script>

<template>
    <div class="book-pers">
        <div class="book-pers__top">
            <div class="book-pers__top-left book-pers__top-left_center">
                <img src="/return.svg" alt="" draggable="false" />
                <div class="book-pers__top-content">
                    <p class="book-pers__title">Different pickup on return</p>
                    <!-- <p class="book-pers__p book-pers__p_green">An additional fee is 20.00€</p> -->
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
            <div class="book-widget__location-solo df">
                <div class="book-widget__location-wrapper">
                    <input type="text" placeholder="Pickup location">
                    <button class="book-widget__location-show" @click="toggleMap">show on map</button>
                </div>
            </div>
            <!-- <div class="book-pers__field">
                <input class="book-pers__field-text" placeholder="Type your address here (the same town)" />
                <button class="book-widget__location-show" @click="toggleMap">show on map</button>
            </div> -->
        </div>
    </div>
</template>