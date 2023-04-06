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
          <p class="book-order__cars-title">Vehicle Class</p>
          <Action />
          <Car v-for="(car, index) in cars" :key="index" :id="car.id" :img="car.img" :carclass="car.carclass" :price="car.price" :name="car.name" :passengers="car.passengers" :suitcases="car.suitcases" />
        </div>
        <div class="book-order__info">
          <div class="book-order__cars-header">
            <p class="book-order__info-title">Summary</p>
            <button class="book-order__cars-edit">
              <img src="/edit.png" alt="" draggable="false">
            </button>
          </div>
          <div class="book-order__info-img">
            <img src="/staticmap.png" alt="" draggable="false"/>
          </div>
          <p class="book-order__info-date">04 April, 17:52</p>
          <div class="book-order__info-location">
            <div>Gera</div>
            <span></span>
            <div>Berlin</div>
          </div>
          <div class="book-order__info-car" v-if="booking.car.carclass">
            <div class="book-order__info-car-left"> 
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3433 5.50918C17.16 4.96834 16.6467 4.58334 16.0417 4.58334H5.95833C5.35333 4.58334 4.84917 4.96834 4.65667 5.50918L2.75 11V17.875C2.75 18.6358 3.36417 19.25 4.125 19.25C4.88583 19.25 5.5 18.6358 5.5 17.875V17.4167H16.5V17.875C16.5 18.6267 17.1142 19.25 17.875 19.25C18.6267 19.25 19.25 18.6358 19.25 17.875V11L17.3433 5.50918ZM6.875 14.6667C6.11417 14.6667 5.5 14.0525 5.5 13.2917C5.5 12.5308 6.11417 11.9167 6.875 11.9167C7.63583 11.9167 8.25 12.5308 8.25 13.2917C8.25 14.0525 7.63583 14.6667 6.875 14.6667ZM15.125 14.6667C14.3642 14.6667 13.75 14.0525 13.75 13.2917C13.75 12.5308 14.3642 11.9167 15.125 11.9167C15.8858 11.9167 16.5 12.5308 16.5 13.2917C16.5 14.0525 15.8858 14.6667 15.125 14.6667ZM5.32583 9.16668L6.27917 6.41668H15.7117L16.665 9.16668H5.32583Z" fill="#1A1B19"/>
              </svg>
              <span>{{ booking.car.carclass }}</span>
              <div class="book-order__info-suit">
                <div class="book-order__info-suit-item">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6_67)">
                      <path d="M7.5 3C8.08016 3 8.63656 3.23047 9.0468 3.6407C9.45703 4.05094 9.6875 4.60734 9.6875 5.1875C9.6875 5.76766 9.45703 6.32406 9.0468 6.7343C8.63656 7.14453 8.08016 7.375 7.5 7.375C6.91984 7.375 6.36344 7.14453 5.9532 6.7343C5.54297 6.32406 5.3125 5.76766 5.3125 5.1875C5.3125 4.60734 5.54297 4.05094 5.9532 3.6407C6.36344 3.23047 6.91984 3 7.5 3ZM3.125 4.5625C3.475 4.5625 3.8 4.65625 4.08125 4.825C3.9875 5.71875 4.25 6.60625 4.7875 7.3C4.475 7.9 3.85 8.3125 3.125 8.3125C2.62772 8.3125 2.15081 8.11496 1.79917 7.76333C1.44754 7.41169 1.25 6.93478 1.25 6.4375C1.25 5.94022 1.44754 5.46331 1.79917 5.11167C2.15081 4.76004 2.62772 4.5625 3.125 4.5625ZM11.875 4.5625C12.3723 4.5625 12.8492 4.76004 13.2008 5.11167C13.5525 5.46331 13.75 5.94022 13.75 6.4375C13.75 6.93478 13.5525 7.41169 13.2008 7.76333C12.8492 8.11496 12.3723 8.3125 11.875 8.3125C11.15 8.3125 10.525 7.9 10.2125 7.3C10.7574 6.59651 11.0104 5.71012 10.9187 4.825C11.2 4.65625 11.525 4.5625 11.875 4.5625ZM3.4375 10.9688C3.4375 9.675 5.25625 8.625 7.5 8.625C9.74375 8.625 11.5625 9.675 11.5625 10.9688V12.0625H3.4375V10.9688ZM0 12.0625V11.125C0 10.2562 1.18125 9.525 2.78125 9.3125C2.4125 9.7375 2.1875 10.325 2.1875 10.9688V12.0625H0ZM15 12.0625H12.8125V10.9688C12.8125 10.325 12.5875 9.7375 12.2188 9.3125C13.8187 9.525 15 10.2562 15 11.125V12.0625Z" fill="#FAF8F2"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_6_67">
                        <rect width="15" height="15" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  x{{ booking.car.passengers }}
                </div>
                <div class="book-order__info-suit-item">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.75C5 3.25272 5.19754 2.77581 5.54917 2.42417C5.90081 2.07254 6.37772 1.875 6.875 1.875H8.125C8.62228 1.875 9.09919 2.07254 9.45083 2.42417C9.80246 2.77581 10 3.25272 10 3.75V13.125H5V3.75ZM3.75 4.375H3.125C2.62772 4.375 2.15081 4.57254 1.79917 4.92417C1.44754 5.27581 1.25 5.75272 1.25 6.25V11.25C1.25 11.7473 1.44754 12.2242 1.79917 12.5758C2.15081 12.9275 2.62772 13.125 3.125 13.125H3.75V4.375ZM11.25 13.125H11.875C12.3723 13.125 12.8492 12.9275 13.2008 12.5758C13.5525 12.2242 13.75 11.7473 13.75 11.25V6.25C13.75 5.75272 13.5525 5.27581 13.2008 4.92417C12.8492 4.57254 12.3723 4.375 11.875 4.375H11.25V13.125ZM6.25 4.375H8.75V3.75C8.75 3.58424 8.68415 3.42527 8.56694 3.30806C8.44973 3.19085 8.29076 3.125 8.125 3.125H6.875C6.70924 3.125 6.55027 3.19085 6.43306 3.30806C6.31585 3.42527 6.25 3.58424 6.25 3.75V4.375Z" fill="#FAF8F2"/>
                  </svg>
                  x{{ booking.car.suitcases }}
                </div>
              </div>
            </div>
            <span class="book-order__info-car-price">${{ booking.car.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>