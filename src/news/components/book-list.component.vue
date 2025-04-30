<template>
  <div class="book-list">
    <BookItem v-for="book in books" :key="book.number" :book="book" />
  </div>
</template>

<script>
import BookItem from './book-item.component.vue';

export default {
  name: "BookList",
  components: {
    BookItem
  },
  props: {
    books: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
