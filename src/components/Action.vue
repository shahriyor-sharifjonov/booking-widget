<script>
import { computed } from 'vue';
import { useBookingStore } from '@/store/bookingStore';

export default {
  setup() {
    const booking = useBookingStore();
    const suitcases = computed(() => booking.suitcases);
    const passengers = computed(() => booking.passengers);

    function setSuitcases(value) {
        booking.setSuitcases(value);
    }

    function incrementSuitcases() {
        if (suitcases.value < 6) {
            setSuitcases(suitcases.value + 1);
        }
    }

    function decrementSuitcases() {
        if (suitcases.value > 0) {
            setSuitcases(suitcases.value - 1);
        }
    }

    function setPassengers(value) {
        booking.setPassengers(value);
    }

    function incrementPassengers() {
        if (passengers.value < 8) {
            setPassengers(passengers.value + 1);
        }
    }

    function decrementPassengers() {
        if (passengers.value > 1) {
            setPassengers(passengers.value - 1);
        }
    }

    return {
        booking,
        suitcases,
        passengers,
        setSuitcases,
        incrementSuitcases,
        decrementSuitcases,
        setPassengers,
        incrementPassengers,
        decrementPassengers,
    };
  },
};
</script>


<template>
    <div class="book-action">
        <div class="book-action__item">
            <div class="book-action__item-left">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6_270)">
                        <path d="M10 4C10.7735 4 11.5154 4.30729 12.0624 4.85427C12.6094 5.40125 12.9167 6.14312 12.9167 6.91667C12.9167 7.69021 12.6094 8.43208 12.0624 8.97906C11.5154 9.52604 10.7735 9.83333 10 9.83333C9.22645 9.83333 8.48459 9.52604 7.93761 8.97906C7.39062 8.43208 7.08333 7.69021 7.08333 6.91667C7.08333 6.14312 7.39062 5.40125 7.93761 4.85427C8.48459 4.30729 9.22645 4 10 4ZM4.16667 6.08333C4.63333 6.08333 5.06667 6.20833 5.44167 6.43333C5.31667 7.625 5.66667 8.80833 6.38333 9.73333C5.96667 10.5333 5.13333 11.0833 4.16667 11.0833C3.50363 11.0833 2.86774 10.8199 2.3989 10.3511C1.93006 9.88226 1.66667 9.24637 1.66667 8.58333C1.66667 7.92029 1.93006 7.28441 2.3989 6.81557C2.86774 6.34672 3.50363 6.08333 4.16667 6.08333ZM15.8333 6.08333C16.4964 6.08333 17.1323 6.34672 17.6011 6.81557C18.0699 7.28441 18.3333 7.92029 18.3333 8.58333C18.3333 9.24637 18.0699 9.88226 17.6011 10.3511C17.1323 10.8199 16.4964 11.0833 15.8333 11.0833C14.8667 11.0833 14.0333 10.5333 13.6167 9.73333C14.3432 8.79535 14.6805 7.6135 14.5583 6.43333C14.9333 6.20833 15.3667 6.08333 15.8333 6.08333ZM4.58333 14.625C4.58333 12.9 7.00833 11.5 10 11.5C12.9917 11.5 15.4167 12.9 15.4167 14.625V16.0833H4.58333V14.625ZM0 16.0833V14.8333C0 13.675 1.575 12.7 3.70833 12.4167C3.21667 12.9833 2.91667 13.7667 2.91667 14.625V16.0833H0ZM20 16.0833H17.0833V14.625C17.0833 13.7667 16.7833 12.9833 16.2917 12.4167C18.425 12.7 20 13.675 20 14.8333V16.0833Z" fill="#1A1B19"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_6_270">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <span>Passengers</span>
            </div>
            <div class="book-action__counter">
                <button class="book-action__counter-decrement" @click="decrementPassengers">
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                    </svg>
                </button>
                <span>{{ passengers }}</span>
                <button class="book-action__counter-increment" @click="incrementPassengers">
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="book-action__item">
            <div class="book-action__item-left">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66666 5C6.66666 4.33696 6.93005 3.70107 7.39889 3.23223C7.86773 2.76339 8.50361 2.5 9.16666 2.5H10.8333C11.4964 2.5 12.1322 2.76339 12.6011 3.23223C13.0699 3.70107 13.3333 4.33696 13.3333 5V17.5H6.66666V5ZM4.99999 5.83333H4.16666C3.50362 5.83333 2.86773 6.09673 2.39889 6.56557C1.93005 7.03441 1.66666 7.67029 1.66666 8.33333V15C1.66666 15.663 1.93005 16.2989 2.39889 16.7678C2.86773 17.2366 3.50362 17.5 4.16666 17.5H4.99999V5.83333ZM15 17.5H15.8333C16.4964 17.5 17.1322 17.2366 17.6011 16.7678C18.0699 16.2989 18.3333 15.663 18.3333 15V8.33333C18.3333 7.67029 18.0699 7.03441 17.6011 6.56557C17.1322 6.09673 16.4964 5.83333 15.8333 5.83333H15V17.5ZM8.33332 5.83333H11.6667V5C11.6667 4.77899 11.5789 4.56702 11.4226 4.41074C11.2663 4.25446 11.0543 4.16667 10.8333 4.16667H9.16666C8.94564 4.16667 8.73368 4.25446 8.5774 4.41074C8.42112 4.56702 8.33332 4.77899 8.33332 5V5.83333Z" fill="#1A1B19"/>
                </svg>
                <span>Suitcases</span>
            </div>
            <div class="book-action__counter">
                <button class="book-action__counter-decrement" @click="decrementSuitcases">
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.91668 5.91583H2.08334V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                    </svg>
                </button>
                <span>{{ suitcases }}</span>
                <button class="book-action__counter-increment" @click="incrementSuitcases">
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.91668 5.91583H5.41668V8.41583H4.58334V5.91583H2.08334V5.0825H4.58334V2.5825H5.41668V5.0825H7.91668V5.91583Z" fill="#1A1B19"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>