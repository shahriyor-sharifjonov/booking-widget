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
            <div class="book-pers__top-left book-pers__top-left_center">
                <img src="/comment.svg" alt="" draggable="false" />
                <div class="book-pers__top-content">
                    <p class="book-pers__title">Comment for driver</p>
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
                <input class="book-pers__field-text" placeholder="Write your comment here" />
            </div>
        </div>
    </div>
</template>