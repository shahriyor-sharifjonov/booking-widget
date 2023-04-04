<template>
    <a href="#" target="_blank" class="book-order__rating-col">
        <div class="book-order__rating-img">
            <img :src="img" alt="" draggable="false" />
        </div>
        <div class="book-order__rating-score">
            <span>{{ score }}</span>
            <img src="/review_star.svg" alt="" draggable="false" />
            <img src="/review_star.svg" alt="" draggable="false" />
            <img src="/review_star.svg" alt="" draggable="false" />
            <img src="/review_star.svg" alt="" draggable="false" />
            <img src="/review_star.svg" alt="" draggable="false" />
        </div>
    </a>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    score: {
        type: String,
        required: true,
    }
  }
};
</script>