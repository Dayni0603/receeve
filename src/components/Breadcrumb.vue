<template>
  <nav class="bg-gray-100 px-1 rounded-md w-full">
    <ol class="list-reset flex">
      <span class="flex" v-for="(page, p) in pages" :key="page">
        <li v-if="pages.length - 1 != p">
          <a
            @click="$router.push(`${page.url}`)"
            class="text-blue-600 hover:text-blue-700"
            >{{ page.page }}</a
          >
        </li>
        <li v-if="pages.length - 1 != p">
          <span class="text-gray-500 mx-2">/</span>
        </li>
        <li v-if="pages.length - 1 == p" class="text-gray-500">
          {{ page.page }}
        </li>
      </span>
    </ol>
  </nav>
</template>
<script lang="ts">
import { BreadcrumbPage } from "@/interfaces/breadcrumb";
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Breadcrumb extends Vue {
  @Prop() pages!: Array<BreadcrumbPage>;
}
</script>
