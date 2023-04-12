<script>
import { ref } from 'vue';
import dayjs from 'dayjs';
// import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    // flatPickr
  },
  data() {
    return {
      configdate: ref({
        wrap: true,
        altFormat: 'M j, Y',
        altInput: true,
        dateFormat: 'Y-m-d',
      }),
      configtime: ref({
        wrap: true,    
        noCalendar: true,
        enableTime: true,
        dateFormat: 'h:i'
      }),
      time: ref(dayjs('12:08', 'HH:mm')),
      today: new Date().toISOString().substr(0, 10),
    }
  },
}
</script>

<template>
  <div class="book-widget__date">
    <!-- <flat-pickr v-model="today" :config="configdate"/> -->
    <input type="date" :value="today">
    <a-time-picker v-model:value="time" format="HH:mm" />
    <!-- <input type="time" :value="time"> -->
  </div>
</template>