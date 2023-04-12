<script>
    export default {
        data() {
            return {
                open: false
            }
        },
        methods: {
            toggleOpen() {
                this.open = !this.open
            }
        }
    }
</script>

<template>
    <div class="book-popup" :class="{'active' : open}">
        <button @click="toggleOpen" class="book-popup__overlay"></button>
        <div class="book-popup__body">
            <div class="book-map__close">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.6 28.5L7.5 26.4L15.9 18L7.5 9.6L9.6 7.5L18 15.9L26.4 7.5L28.5 9.6L20.1 18L28.5 26.4L26.4 28.5L18 20.1L9.6 28.5Z" fill="#fff"/>
                </svg>
            </div>
            <p class="book-popup__title">Enter your credentials</p>
            <div class="book-popup__field">
                <p class="book-popup__label">Email</p>
                <input type="email" class="book-popup__input"/>
            </div>
            <div class="book-popup__field">
                <p class="book-popup__label">Password</p>
                <div class="book-popup__pass">
                    <input type="password"/>
                    <a href="#" @click="toggleOpen">Forgot?</a>
                </div>
            </div>
            <button class="book-popup__button">Sign in</button>
            <p></p>
        </div>
    </div>
    <div class="book-order__cars">
        <div class="book-popup__header">
            <p class="book-order__cars-title">Passenger Details</p>
            <button type="button" class="book-popup__open" @click="toggleOpen">Sign in</button>
        </div>
        <div class="book-details__field">
            <p class="book-details__field-label">Full name *</p>
            <input type="text" class="book-details__field-input" />
        </div>
        <div class="book-details__field">
            <p class="book-details__field-label">Email *</p>
            <input type="email" class="book-details__field-input" />
        </div>
        <div class="book-details__field">
            <p class="book-details__field-label">Phone number *</p>
            <input type="tel" class="book-details__field-input" />
        </div>
        <p class="book-details__p">
            By providing your contact details, you agree with our <a href="#">Privacy Policy</a>.
        </p>
    </div>
</template>