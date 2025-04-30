<script>
import {Button as PvButton, Card as PvCard} from "primevue";
import {BookAssembler} from "../services/book.assembler.js";

export default {
  name: "book-item",
  components: {PvButton, PvCard},
  props: {
    book: {
      type: BookAssembler,
      required: true
    }
  },
  methods: {
    search() {
      window.open('https://www.crisol.com.pe/', '_blank');
    }
  }
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <img :alt="book.title" :src="book.cover" class="image-fit"/>
    </template>
    <template #title>
      <p>{{ book.title }}</p>
    </template>
    <template #subtitle>
      <p>{{book.originalTitle}}</p>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap">
        {{ book.description }}
      </p>
    </template>
    <template #footer>
      <div class="flex justify-content-between">
        <span>{{ book.pages }} {{$t('page')}} </span>
        <a href="https://www.crisol.com.pe/" target="_blank" class="p-button p-button-text p-button-sm" aria-label="Search"> {{$t('search')}}</a>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
  .p-button-sm {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
  .image-fit{
    object-fit: cover;
    width: 50%;
    height: 100%;
  }

</style>