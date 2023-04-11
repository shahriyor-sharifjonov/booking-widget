<script>
import {ref} from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

// const time = ref(null);
export default {
  components: {
    flatPickr
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
      time: new Date().toISOString().substr(11, 5),
      today: new Date().toISOString().substr(0, 10),
    }
  },
}
</script>

<template>
  <div class="book-widget__date">
    <!-- <flat-pickr v-model="today" :config="configdate"/> -->
    <input type="date" :value="today">
    <flat-pickr v-model="time" :config="configtime"/>
    <!-- <input type="time" :value="time"> -->
  </div>
</template>