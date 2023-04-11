<script>
    export default {
        data() {
            return {
                open: false,
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
                    <p class="book-pers__p book-pers__p_green">For every hour, an additional fee of 30.00€ applies</p>
                </div>
            </div>
            <div class="book-widget__checkbox-input">
                <input type="checkbox" v-model="open" />
                <div class="book-widget__checkbox-overlay">
                    <div></div>
                </div>
            </div>
        </div>
        <div class="book-pers__bot" v-if="open">
            <div class="book-pers__field">
                <input type="number" min="1" max="5" class="book-pers__field-text"/>
            </div>
        </div>
    </div>
</template>