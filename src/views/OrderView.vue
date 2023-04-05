<script>
import Action from '../components/Action.vue'
import Header from '../components/OrderHeader.vue'
import Car from '../components/Car.vue'
import { computed } from 'vue';
import { useBookingStore } from '@/store/bookingStore';

export default {
  components: {
    Action,
    Header,
    Car,
  },
  setup() {
    const booking = useBookingStore();
    const cars = computed(() => booking.cars);

    return {
      booking,
      cars,
    };
  }
}
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
          <Car v-for="(car, index) in cars" :key="index" :car="car" :img="car.img" :carclass="car.carclass" :price="car.price" :name="car.name" :passengers="car.passengers" :suitcases="car.suitcases" />
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