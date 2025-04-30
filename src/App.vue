<template>
  <div>
    <header-content />
    <!-- Barra superior con selector de idioma -->
    <div class="toolbar">
      <language-switcher />
    </div>

    <!-- Lista de libros -->
    <book-list :books="books" />

    <!-- Pie de página -->
    <footer-content />
  </div>
</template>

<script>
import FooterContent from "./public/components/footer-content.component.vue";
import BookList from "./news/components/book-list.component.vue";
import LanguageSwitcher from "./public/components/language-switcher.component.vue";
import { HarryPotterApiService } from "./news/services/harry-potter-api.service.js";
import { BookAssembler } from "./news/services/book.assembler.js";
import HeaderContent from "./public/components/header-content.component.vue";

export default {
  name: "App",
  components: {
    FooterContent,
    BookList,
    LanguageSwitcher,
    HeaderContent
  },
  data() {
    return {
      books: [],
      harryPotterApi: new HarryPotterApiService(),
    };
  },
  methods: {
    loadBooks() {
      this.harryPotterApi.getBooks()
          .then(response => {
            this.books = BookAssembler.toEntitiesFromResponse(response);
          })
          .catch(error => {
            console.error("Error loading books:", error);
            this.books = [];
          });
    }
  },
  created() {
    this.loadBooks();
  }
};
</script>

<style scoped>
.toolbar {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
