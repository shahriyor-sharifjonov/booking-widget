<script>
export default {
  data() {
    return {
      time: new Date().toISOString().substr(11, 5),
      today: new Date().toISOString().substr(0, 10),
    }
  },
}
</script>

<template>
  <div class="book-widget__date">
    <input type="date" :value="today">
    <input type="time" :value="time">
  </div>
</template>