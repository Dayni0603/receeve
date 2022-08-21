<template>
  <div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <th scope="col" class="py-3 px-6">#</th>
        <th
          scope="col"
          class="py-3 px-6"
          v-for="column in columns"
          :key="column.id"
        >
         <slot></slot>
          {{ column.text }}
        </th>
        <th v-if="actions !== undefined && actions.length != 0">Actions</th>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="item.id">
          <td scope="row">
            <span
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ i + 1 }}</span
            >
          </td>
          <td scope="row" v-for="column in columns" :key="column.id">
            <span class="py-4 px-6 text-gray-900 whitespace-nowrap">
              {{ item[column.field] }}
            </span>
          </td>
          <th v-if="actions !== undefined && actions.length != 0">
            <span
              v-for="(action, a) in actions"
              :key="a"
              class="py-4 px-6 text-gray-900 whitespace-nowrap"
            >
              <span @click="action.event">{{ action.name }}</span>
            </span>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Actions } from "@/interfaces/TableData";
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class TableComponent extends Vue {
  @Prop() data!: Array<any>;
  @Prop() columns!: Array<any>;
  @Prop() actions!: Array<Actions>;
  mounted(): void {}
}
</script>

<style scoped></style>
