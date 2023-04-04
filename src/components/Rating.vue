<script setup>
import RatingItem from './RatingItem.vue'
</script>

<template>
    <div class="book-order__rating">
        <div class="book-order__rating-content">
          <p class="book-order__rating-title">Our rating speak for themselves</p>
          <p class="book-order__rating-desc">Over 6000 + travellers ❤️ us</p>
        </div>
        <div class="book-order__rating-row">
          <RatingItem img="/facebook.svg" score="4.7"/>
          <RatingItem img="/trip-advisor.svg" score="4.5"/>
          <RatingItem img="/trustpilot.svg" score="4.6"/>
          <RatingItem img="/google.svg" score="5"/>
        </div>
    </div>
</template>