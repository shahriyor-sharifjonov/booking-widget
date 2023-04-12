<script>
  import { ref } from 'vue';
  import { computed } from 'vue';
  import { useBookingStore } from '@/store/bookingStore';
  import Location from './Location.vue';
  import Date from './Date.vue';

  export default {
    components: {
      Location,
      Date
    },
    data() {
      return {
        hourlypickup: ''
      }
    },
    setup() {
      const booking = useBookingStore();
      const type = computed(() => booking.type);
      const returnTrip = computed(() => booking.returnTrip);
      const pickup = computed(() => booking.fromAToB.pickup)
      const mapOpen = computed(() => booking.mapOpen);

      function toggleMap() {
        booking.setMapOpen(!mapOpen.value);
      }

      function setType(value) {
        booking.setType(value);
      }

      function toggleReturnTrip() {
        booking.setReturnTrip(!returnTrip.value);
      }

      return {
        booking,
        type,
        returnTrip,
        pickup,
        setType,
        toggleReturnTrip,
        mapOpen,
        toggleMap
      };
    },
    methods: {
      submitForm() {
        this.$router.push({ name: 'order' });
      },
    },
  }
</script>

<template>
  <div class="book-widget">
    <div class="book-widget__content">
      <p class="book-widget__title">Book a transfer</p>
      <div class="book-widget__switcher">
        <button class="book-widget__switcher-button" :class="{ 'book-widget__switcher-button_active': type === 'from-a-to-b' }" @click="setType('from-a-to-b')">From A-to-B</button>
        <button class="book-widget__switcher-button" :class="{ 'book-widget__switcher-button_active': type === 'hourly-ride' }" @click="setType('hourly-ride')">Hourly ride</button>
      </div>
      <div class="book-widget__type" v-if="type === 'from-a-to-b'">
        <Location />
        <Date />
        <div class="book-widget__checkbox">
          <div class="book-widget__checkbox-input">
            <input type="checkbox" id="bookWidgetReTrip" v-model="returnTrip" @change="toggleReturnTrip">
            <div class="book-widget__checkbox-overlay">
              <div></div>
            </div>
          </div>
          <label for="bookWidgetReTrip" class="book-widget__checkbox-label">Return Trip</label>
        </div>
        <div class="book-widget__type" v-if="returnTrip === true">
          <Location />
          <Date />
        </div>
      </div>
      <div class="book-widget__type" v-if="type === 'hourly-ride'">
        <div class="book-widget__location-solo">
          <div class="book-widget__location-wrapper">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10.8333C8.39171 10.8333 7.08337 9.52501 7.08337 7.91668C7.08337 6.30834 8.39171 5.00001 10 5.00001C11.6084 5.00001 12.9167 6.30834 12.9167 7.91668C12.9167 9.52501 11.6084 10.8333 10 10.8333ZM10 1.66669C6.32421 1.66669 3.33337 4.62835 3.33337 8.26919C3.33337 12.8309 9.20754 17.9184 9.45754 18.1325C9.61421 18.2667 9.80671 18.3334 10 18.3334C10.1934 18.3334 10.3859 18.2667 10.5425 18.1325C10.7925 17.9184 16.6667 12.8309 16.6667 8.26919C16.6667 4.62835 13.6759 1.66669 10 1.66669Z" fill="#8F90A6"/>
            </svg>
            <input type="text" v-model="hourlypickup" placeholder="Pickup location">
          <button class="book-widget__location-show" @click="toggleMap" v-if="hourlypickup.length > 0">show on map</button>
          </div>
        </div>
        <div class="book-widget__location-solo">
          <div class="book-widget__location-wrapper">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8844 10.8334H11.347C10.8588 10.8334 10.4626 10.4609 10.4626 10.0001V6.66675C10.4626 6.20591 10.8588 5.83341 11.347 5.83341C11.8351 5.83341 12.2313 6.20591 12.2313 6.66675V9.16675H14.8844C15.3734 9.16675 15.7687 9.53925 15.7687 10.0001C15.7687 10.4609 15.3734 10.8334 14.8844 10.8334ZM11.347 1.66675C6.47063 1.66675 2.50342 5.40508 2.50342 10.0001C2.50342 14.5951 6.47063 18.3334 11.347 18.3334C16.2233 18.3334 20.1905 14.5951 20.1905 10.0001C20.1905 5.40508 16.2233 1.66675 11.347 1.66675Z" fill="#8F90A6"/>
            </svg>
            <select>
              <option>2 hours</option>
              <option>3 hours</option>
              <option>4 hours</option>
              <option>5 hours</option>
              <option>6 hours</option>
              <option>7 hours</option>
              <option>8 hours</option>
              <option>9 hours</option>
              <option>10 hours</option>
              <option>11 hours</option>
              <option>12 hours</option>
              <option>13 hours</option>
              <option>14 hours</option>
              <option>15 hours</option>
              <option>16 hours</option>
              <option>17 hours</option>
              <option>18 hours</option>
              <option>19 hours</option>
              <option>20 hours</option>
              <option>21 hours</option>
              <option>22 hours</option>
            </select>
          </div>
        </div>
        <Date />
      </div>
      <button class="book-widget__next" @click="submitForm">Next Step</button>
    </div>
  </div>
</template>