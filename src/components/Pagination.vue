<template>
  <div class="flex justify-center">
    <nav aria-label="Page navigation example">
      <ul class="flex list-style-none">
        <li class="page-item">
          <a
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded hover:bg-gray-200 focus:shadow-none"
            :class="
              isPrivDisable ? 'bg-gray-200 text-white' : 'hover:text-gray-800'
            "
            @click="changePage('priv', page)"
            >Previous</a
          >
        </li>
      
        <li class="page-item" v-for="index in totalPages" :key="index">
          <a
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            :class="page == index ? 'bg-gray-400' : ''"
            @click="changePage('', index)"
            >{{ index }}</a
          >
        </li>
        <li class="page-item">
          <a
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded hover:bg-gray-200 focus:shadow-none"
            :class="
              isNextDisable ? 'bg-gray-200 text-white' : 'hover:text-gray-800'
            "
            @click="changePage('next', page)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Pagination extends Vue {
  @Prop() totalPages!: number;
  @Prop() page!: number;

  isPrivDisable: boolean = true;
  isNextDisable: boolean = false;
  mounted(): void {}
  changePage(action: any, page: number) {
    if (action == "priv") {
      page--;
    } else if (action == "next") {
      page++;
    } else {
      page;
    }
    if (page != 1) {
      this.isPrivDisable = false;
    } else {
      this.isPrivDisable = true;
    }
    if (page == this.totalPages) {
      this.isNextDisable = true;
    } else {
      this.isNextDisable = false;
    }
    if (page < this.totalPages + 1) {
      //checking not emit if last page is reached
      this.$emit("clicked", page, action);
    }
  }
}
</script>

<style scoped></style>
