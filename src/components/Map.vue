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
    }
}
</script>

<template>
    <div class="book-map" :class="{'active' : mapOpen === true}">
        <button class="book-map__overlay" @click="toggleMap">
        </button>
        <div class="book-map__body">
            <div class="book-map__close">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.6 28.5L7.5 26.4L15.9 18L7.5 9.6L9.6 7.5L18 15.9L26.4 7.5L28.5 9.6L20.1 18L28.5 26.4L26.4 28.5L18 20.1L9.6 28.5Z" fill="#fff"/>
                </svg>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23976.408271157106!2d69.23460066318513!3d41.3077533860468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd9a67ffba7%3A0x1d44d4e8afe5d8aa!2sHUMO%20ARENA!5e0!3m2!1sen!2s!4v1681188248060!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>