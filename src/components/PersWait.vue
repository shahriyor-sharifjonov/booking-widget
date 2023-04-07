<script>
    export default {
        data() {
            return {
                open: false
            }
        },
    }
</script>

<template>
    <div class="book-pers">
        <div class="book-pers__top">
            <div class="book-pers__top-left">
                <img src="/time.svg" alt="" draggable="false" />
                <div class="book-pers__top-content">
                    <p class="book-pers__title">Extra waiting time</p>
                    <p class="book-pers__p book-pers__p_green">Instead of 1 hour the drivers wait 2 hours at the airport, an additional fee of 30.00€ applies</p>
                </div>
            </div>
            <div class="book-widget__checkbox-input">
                <input type="checkbox" v-model="open" />
                <div class="book-widget__checkbox-overlay">
                <div></div>
                </div>
            </div>
        </div>
    </div>
</template>