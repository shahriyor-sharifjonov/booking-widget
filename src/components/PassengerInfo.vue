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
    <div class="book-order__cars">
        <div class="book-popup__header">
            <p class="book-order__cars-title">Passenger Details</p>
        </div>
        <div class="book-details__field">
            <p class="book-details__field-label">Name: yourname client</p>
        </div>
        <div class="book-details__field">
            <p class="book-details__field-label">Email: gmail@glhf.gg</p>
        </div>
        <div class="book-details__field">
            <p class="book-details__field-label">Phone number: +998879099909</p>
        </div>
    </div>
</template>