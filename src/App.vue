<script setup>
import { RouterView } from 'vue-router';
import { useBookingStore } from '@/store/bookingStore';

const booking = useBookingStore();
</script>

<template>
    <!-- {{ booking.car }} -->
    <RouterView />
</template>