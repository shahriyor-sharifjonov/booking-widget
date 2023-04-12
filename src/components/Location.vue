<script>
import { computed } from 'vue';
import { useBookingStore } from '@/store/bookingStore';

export default {
  data() {
    return {
      pickupLocation: '',
      dropoffLocation: ''
    }
  },
  setup() {
    const booking = useBookingStore();
    const mapOpen = computed(() => booking.mapOpen);

    function toggleMap() {
      booking.setMapOpen(!mapOpen.value);
    }

    return {
      mapOpen,
      toggleMap
    }
  },
  methods: {
    swapLocations() {
      const temp = this.pickupLocation;
      this.pickupLocation = this.dropoffLocation;
      this.dropoffLocation = temp;
    },
  }
}
</script>


<template>
    <div class="book-widget__location">
        <button class="book-widget__location-btn" @click="swapLocations">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9108 6.83915C11.585 6.51332 11.585 5.98665 11.9108 5.66082L14.4108 3.16082C14.7367 2.83498 15.2633 2.83498 15.5892 3.16082L18.0892 5.66082C18.2517 5.82332 18.3333 6.03665 18.3333 6.24998C18.3333 6.46332 18.2517 6.67665 18.0892 6.83915C17.7633 7.16498 17.2367 7.16498 16.9108 6.83915L15.8333 5.76165V15.7583C15.8333 17.4083 14.5142 18.75 12.8925 18.75H10.8333C10.3725 18.75 9.99999 18.3775 9.99999 17.9167C9.99999 17.4558 10.3725 17.0833 10.8333 17.0833H12.8925C13.595 17.0833 14.1667 16.4892 14.1667 15.7583V5.76165L13.0892 6.83915C12.7633 7.16498 12.2367 7.16498 11.9108 6.83915ZM4.16665 15.9048V5.90816C4.16665 4.25899 5.48582 2.91649 7.10748 2.91649H9.16665C9.62748 2.91649 9.99998 3.28899 9.99998 3.74983C9.99998 4.21066 9.62748 4.58316 9.16665 4.58316H7.10748C6.40582 4.58316 5.83332 5.17733 5.83332 5.90816V15.9048L6.91082 14.8273C7.23665 14.5023 7.76332 14.5023 8.08915 14.8273C8.25165 14.9898 8.33332 15.2032 8.33332 15.4165C8.33332 15.6298 8.25165 15.8432 8.08915 16.0057L5.58915 18.5057C5.26332 18.8315 4.73665 18.8315 4.41082 18.5057L1.91082 16.0057C1.58498 15.6807 1.58498 15.1532 1.91082 14.8273C2.23665 14.5023 2.76332 14.5023 3.08915 14.8273L4.16665 15.9048Z" fill="#555770"/>
            </svg>
        </button>
        <div class="book-widget__location-wrapper">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10.8333C8.39171 10.8333 7.08337 9.52501 7.08337 7.91668C7.08337 6.30834 8.39171 5.00001 10 5.00001C11.6084 5.00001 12.9167 6.30834 12.9167 7.91668C12.9167 9.52501 11.6084 10.8333 10 10.8333ZM10 1.66669C6.32421 1.66669 3.33337 4.62835 3.33337 8.26919C3.33337 12.8309 9.20754 17.9184 9.45754 18.1325C9.61421 18.2667 9.80671 18.3334 10 18.3334C10.1934 18.3334 10.3859 18.2667 10.5425 18.1325C10.7925 17.9184 16.6667 12.8309 16.6667 8.26919C16.6667 4.62835 13.6759 1.66669 10 1.66669Z" fill="#8F90A6"/>
          </svg>
          <input type="text" placeholder="Pickup location" v-model="pickupLocation">
          <button class="book-widget__location-show" @click="toggleMap" v-if="pickupLocation.length > 0">show on map</button>
        </div>
        <div class="book-widget__location-wrapper">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0563 3.89969C15.6713 3.62136 15.173 3.54219 14.7238 3.68886C14.2438 3.84553 13.6188 3.92803 12.9163 3.92803C11.9797 3.92803 11.1663 3.60886 10.3047 3.27136C9.33634 2.89219 8.33384 2.49969 7.08301 2.49969C4.67801 2.49969 3.74634 3.29303 3.58301 3.45303C3.42384 3.60886 3.33301 3.82386 3.33301 4.04803V9.99969V12.6189V16.6664C3.33301 17.1272 3.70634 17.4997 4.16634 17.4997C4.62717 17.4997 4.99967 17.1272 4.99967 16.6664V13.0847C5.32884 12.9389 5.97717 12.738 7.08301 12.738C8.01967 12.738 8.83384 13.0572 9.69551 13.3955C10.6638 13.7747 11.6655 14.1664 12.9163 14.1664C14.4238 14.1664 15.3522 13.8514 15.8672 13.5872C16.3605 13.3314 16.6663 12.8355 16.6663 12.2905V5.08803C16.6663 4.62136 16.4388 4.17719 16.0563 3.89969Z" fill="#8F90A6"/>
          </svg>
          <input type="text" placeholder="Dropoff location" v-model="dropoffLocation">
          <button class="book-widget__location-show" @click="toggleMap" v-if="dropoffLocation.length > 0">show on map</button>
        </div>
    </div>
</template>