<script setup>
import { RouterView } from 'vue-router';
import { useBookingStore } from '@/store/bookingStore';
import Map from './components/Map.vue';
const booking = useBookingStore();
</script>

<template>
    <!-- {{ booking.fromAToB }} -->
    <RouterView />
    <Map />
</template>