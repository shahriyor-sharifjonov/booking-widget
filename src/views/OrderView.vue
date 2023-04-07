<script>
import Action from '../components/Action.vue'
import Header from '../components/OrderHeader.vue'
import Car from '../components/Car.vue'
import { computed } from 'vue';
import { useBookingStore } from '@/store/bookingStore';
import PersSign from '../components/PersSign.vue';
import PersComment from '../components/PersComment.vue';
import PersWait from '../components/PersWait.vue';
import PersStop from '../components/PersStop.vue';
import PersMusic from '../components/PersMusic.vue';
import PersLanguage from '../components/PersLanguage.vue';
import PersSeat from '../components/PersSeat.vue';
import PersWater from '../components/PersWater.vue';
import PersLuggage from '../components/PersLuggage.vue';

export default {
  components: {
    Action,
    Header,
    Car,
    PersSign,
    PersComment,
    PersWait,
    PersStop,
    PersMusic,
    PersLanguage,
    PersSeat,
    PersWater,
    PersLuggage
  },
  data() {
    return { 
      services: false
    }
  },
  setup() {
    const booking = useBookingStore();
    const cars = computed(() => booking.cars);

    return {
      booking,
      cars,
    };
  },
  methods: {
    toggleServices() {
      this.services = !this.services;
    }
  }
}
</script>

<template>
  <div class="book-order">
    <div class="book-order__container">
      <Header />
      <div class="book-order__wrapper">
        <div class="book-order__left">
          <div class="book-order__cars">
            <p class="book-order__cars-title">Vehicle Class</p>
            <Action />
            <Car v-for="(car, index) in cars" :key="index" :id="car.id" :img="car.img" :carclass="car.carclass" :type="car.type" :price="car.price" :name="car.name" :passengers="car.passengers" :suitcases="car.suitcases" />
          </div>
          <div class="book-order__rec">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_6_113" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
              <path d="M1.74542 9.23873C1.73543 9.12367 1.74946 9.00779 1.78663 8.89844C1.82381 8.78909 1.8833 8.68866 1.96134 8.60353C2.03939 8.51839 2.13428 8.45041 2.23999 8.40389C2.3457 8.35738 2.45992 8.33334 2.57542 8.33331H4.16667C4.38768 8.33331 4.59964 8.42111 4.75592 8.57739C4.9122 8.73367 5 8.94563 5 9.16664V17.0833C5 17.3043 4.9122 17.5163 4.75592 17.6726C4.59964 17.8288 4.38768 17.9166 4.16667 17.9166H3.26417C3.0556 17.9167 2.85459 17.8385 2.70084 17.6976C2.5471 17.5567 2.45179 17.3632 2.43375 17.1554L1.74542 9.23873ZM7.5 8.90623C7.5 8.55789 7.71667 8.24623 8.03125 8.09789C8.71833 7.77373 9.88875 7.12248 10.4167 6.24206C11.0971 5.10706 11.2254 3.05664 11.2463 2.58706C11.2492 2.52123 11.2475 2.45539 11.2563 2.39039C11.3692 1.57664 12.9396 2.52706 13.5417 3.53206C13.8688 4.07706 13.9104 4.79331 13.8763 5.35289C13.8392 5.95123 13.6638 6.52914 13.4917 7.10331L13.125 8.32706H17.6488C17.7775 8.32705 17.9045 8.35688 18.0198 8.4142C18.1351 8.47152 18.2355 8.55477 18.3132 8.65743C18.3909 8.76009 18.4438 8.87936 18.4677 9.00588C18.4916 9.1324 18.4858 9.26273 18.4508 9.38664L16.2133 17.31C16.1639 17.4847 16.0588 17.6386 15.914 17.7481C15.7691 17.8576 15.5924 17.9168 15.4108 17.9166H8.33333C8.11232 17.9166 7.90036 17.8288 7.74408 17.6726C7.5878 17.5163 7.5 17.3043 7.5 17.0833V8.90623Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </mask>
              <g mask="url(#mask0_6_113)">
              <path d="M0 0H20V20H0V0Z" fill="#1A1B19"/>
              </g>
            </svg>
            AtoB Transfer guarantees only the best price
          </div>
          <div class="book-order__cars">
            <p class="book-order__cars-title">Personalize your Transfer</p>
            <PersSign />
            <PersSeat />
            <PersLanguage />
            <PersMusic />
            <PersWater />
            <PersLuggage />
            <PersStop />
            <PersWait />
            <PersComment />
          </div>
          <div class="book-order__rec">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_6_113" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
              <path d="M1.74542 9.23873C1.73543 9.12367 1.74946 9.00779 1.78663 8.89844C1.82381 8.78909 1.8833 8.68866 1.96134 8.60353C2.03939 8.51839 2.13428 8.45041 2.23999 8.40389C2.3457 8.35738 2.45992 8.33334 2.57542 8.33331H4.16667C4.38768 8.33331 4.59964 8.42111 4.75592 8.57739C4.9122 8.73367 5 8.94563 5 9.16664V17.0833C5 17.3043 4.9122 17.5163 4.75592 17.6726C4.59964 17.8288 4.38768 17.9166 4.16667 17.9166H3.26417C3.0556 17.9167 2.85459 17.8385 2.70084 17.6976C2.5471 17.5567 2.45179 17.3632 2.43375 17.1554L1.74542 9.23873ZM7.5 8.90623C7.5 8.55789 7.71667 8.24623 8.03125 8.09789C8.71833 7.77373 9.88875 7.12248 10.4167 6.24206C11.0971 5.10706 11.2254 3.05664 11.2463 2.58706C11.2492 2.52123 11.2475 2.45539 11.2563 2.39039C11.3692 1.57664 12.9396 2.52706 13.5417 3.53206C13.8688 4.07706 13.9104 4.79331 13.8763 5.35289C13.8392 5.95123 13.6638 6.52914 13.4917 7.10331L13.125 8.32706H17.6488C17.7775 8.32705 17.9045 8.35688 18.0198 8.4142C18.1351 8.47152 18.2355 8.55477 18.3132 8.65743C18.3909 8.76009 18.4438 8.87936 18.4677 9.00588C18.4916 9.1324 18.4858 9.26273 18.4508 9.38664L16.2133 17.31C16.1639 17.4847 16.0588 17.6386 15.914 17.7481C15.7691 17.8576 15.5924 17.9168 15.4108 17.9166H8.33333C8.11232 17.9166 7.90036 17.8288 7.74408 17.6726C7.5878 17.5163 7.5 17.3043 7.5 17.0833V8.90623Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </mask>
              <g mask="url(#mask0_6_113)">
              <path d="M0 0H20V20H0V0Z" fill="#1A1B19"/>
              </g>
            </svg>
            Flexible cancellation up to 24 Hours before your transfer
          </div>
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
          <div class="book-order__info-car-wrap">
            <button @click="toggleServices" class="book-order__info-car" :class="{'book-order__info-car_active' : services === true}">
              <div class="book-order__info-car-left"> 
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.30502 1.76917C6.57252 1.76001 4.88585 3.42834 5.65585 5.50001H2.75002C2.26379 5.50001 1.79747 5.69316 1.45366 6.03698C1.10984 6.38079 0.916687 6.84711 0.916687 7.33334V9.16667C0.916687 9.40979 1.01326 9.64294 1.18517 9.81485C1.35708 9.98676 1.59024 10.0833 1.83335 10.0833H10.0834V7.33334H11.9167V10.0833H20.1667C20.4098 10.0833 20.643 9.98676 20.8149 9.81485C20.9868 9.64294 21.0834 9.40979 21.0834 9.16667V7.33334C21.0834 6.84711 20.8902 6.38079 20.5464 6.03698C20.2026 5.69316 19.7363 5.50001 19.25 5.50001H16.3442C17.4167 2.50251 13.3834 0.385005 11.5225 2.97001L11 3.66667L10.4775 2.95167C9.90002 2.13584 9.10252 1.77834 8.30502 1.76917ZM8.25002 3.66667C9.06585 3.66667 9.47835 4.65667 8.90085 5.23417C8.32335 5.81167 7.33335 5.39917 7.33335 4.58334C7.33335 4.34022 7.42993 4.10707 7.60184 3.93516C7.77375 3.76325 8.00691 3.66667 8.25002 3.66667ZM13.75 3.66667C14.5659 3.66667 14.9784 4.65667 14.4009 5.23417C13.8234 5.81167 12.8334 5.39917 12.8334 4.58334C12.8334 4.34022 12.9299 4.10707 13.1018 3.93516C13.2737 3.76325 13.5069 3.66667 13.75 3.66667ZM1.83335 11V18.3333C1.83335 18.8196 2.02651 19.2859 2.37032 19.6297C2.71414 19.9735 3.18046 20.1667 3.66669 20.1667H18.3334C18.8196 20.1667 19.2859 19.9735 19.6297 19.6297C19.9735 19.2859 20.1667 18.8196 20.1667 18.3333V11H11.9167V18.3333H10.0834V11H1.83335Z" fill="#1A1B19"/>
                </svg>
                <span>Extra services
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.4173 9.57721L5.25434 7.41425C4.9909 7.15081 4.93211 6.84938 5.07797 6.50996C5.22383 6.17054 5.48367 6.00055 5.85747 6H10.1418C10.5162 6 10.7763 6.16999 10.9221 6.50996C11.068 6.84993 11.0089 7.15136 10.7449 7.41425L8.58197 9.57721C8.49878 9.6604 8.40866 9.72279 8.3116 9.76439C8.21455 9.80599 8.11056 9.82678 7.99964 9.82678C7.88872 9.82678 7.78473 9.80599 7.68767 9.76439C7.59061 9.72279 7.50049 9.6604 7.4173 9.57721Z" fill="#1A1B19"/>
                  </svg>
                </span>
              </div>
              <span class="book-order__info-car-price">$0.00</span>
            </button>
            <div class="book-order__info-car-content" v-if="services === true">
              <div class="book-order__info-car-subchild">
                <span>I require a child seat</span>
                <span>$15.00</span>
              </div>
              <div class="book-order__info-car-subchild">
                <span>A bottle of water</span>
                <span>$3.00</span>
              </div>
            </div>
          </div>
          <div class="book-order__info-total">
            <span>Total:</span>
            <span>$495</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>