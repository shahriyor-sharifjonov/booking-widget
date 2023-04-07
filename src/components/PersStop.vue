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
                <img src="/stop.svg" alt="" draggable="false" />
                <div class="book-pers__top-content">
                    <p class="book-pers__title">Extra stop</p>
                    <p class="book-pers__p book-pers__p_green">An additional fee is 20.00€</p>
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
                <input class="book-pers__field-text" placeholder="Type your address here (the same town)" />
            </div>
        </div>
    </div>
</template>