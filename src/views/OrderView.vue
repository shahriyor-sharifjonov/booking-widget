<script setup>
import Rating from '../components/Rating.vue'
</script>

<template>
  <div class="book-order">
    <div class="book-order__container">
      <Rating />
      <div class="book-order__wrapper">
        <div class="book-order__cars">
          <div class="book-order__cars-header">
            <p class="book-order__cars-title">Vehicle Class</p>
            <button class="book-order__cars-edit">
              <img src="/edit.png" alt="" draggable="false">
            </button>
          </div>
        </div>
        <div class="book-order__info">
          <p class="book-order__info-title">Summary</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>