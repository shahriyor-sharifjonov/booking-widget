<script setup>
import Action from '../components/Action.vue'
import Header from '../components/OrderHeader.vue'
</script>

<template>
  <div class="book-order">
    <div class="book-order__container">
      <Header />
      <div class="book-order__wrapper">
        <div class="book-order__cars">
          <!-- <div class="book-order__cars-header"> -->
          <p class="book-order__cars-title">Vehicle Class</p>
            <!-- <button class="book-order__cars-edit">
              <img src="/edit.png" alt="" draggable="false">
            </button> -->
          <!-- </div> -->
          <Action />
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