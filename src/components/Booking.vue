<script>
import Location from './Location.vue';

export default { 
  components: {
    Location,
  },
  data() {
    return {
      type: 'from-a-to-b',
      returnTrip: true,
    }
  },
}
</script>

<template>
  <div class="book-widget">
    <div class="book-widget__content">
      <p class="book-widget__title">Book a transfer</p>
      <div class="book-widget__switcher">
        <button class="book-widget__switcher-button" :class="{ 'book-widget__switcher-button_active': type === 'from-a-to-b' }" @click="type = 'from-a-to-b'">From A-to-B</button>
        <button class="book-widget__switcher-button" :class="{ 'book-widget__switcher-button_active': type === 'hourly-ride' }" @click="type = 'hourly-ride'">Hourly ride</button>
      </div>
      <div class="book-widget__type" v-if="type === 'from-a-to-b'">
        <Location />
        <div class="book-widget__checkbox">
          <div class="book-widget__checkbox-input">
            <input type="checkbox" id="bookWidgetReTrip" v-model="returnTrip">
            <div class="book-widget__checkbox-overlay">
              <div></div>
            </div> 
          </div>
          <label for="bookWidgetReTrip" class="book-widget__checkbox-label">Return Trip</label>
        </div>
        <div class="book-widget__field" v-if="returnTrip === true">
          <Location />
        </div>
      </div>
      <div class="book-widget__type" v-if="type === 'hourly-ride'">
        Hourly ride block 
      </div>
    </div>
  </div>
</template>