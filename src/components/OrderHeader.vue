<script>
    export default {
        data() {
            return {
                open: false
            }
        }, 
        methods: {
            toggleContent() {
                this.open = !this.open;
            }
        }
    }
</script>

<template>
    <div class="book-header">
        <div class="book-header__button_nobg">
            <input type="checkbox" id="sharedtaxi">
            <label for="sharedtaxi">Shared Taxi</label>
        </div>
        <button class="book-header__button">
            Email Quote 
        </button>
        <div class="book-header__dropdown">
            <button class="book-header__dropdown-btn" :class="{'book-header__dropdown-btn_active' : open}" @click="toggleContent">
                <img src="/eng.png" alt="" draggable="false" />
                <span>English</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" fill="#1A1B19"/>
                </svg>
            </button>
            <div class="book-header__dropdown-content" v-if="open">
                <button class="book-header__dropdown-item" @click="toggleContent">
                    <img src="/eng.png" alt="" draggable="false" />
                    English
                </button>
                <button class="book-header__dropdown-item" @click="toggleContent">
                    <img src="/eng.png" alt="" draggable="false" />
                    English
                </button>
                <button class="book-header__dropdown-item" @click="toggleContent">
                    <img src="/eng.png" alt="" draggable="false" />
                    English
                </button>
            </div>
        </div>
    </div>
</template>