<template>
  <div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <th scope="col" class="py-3 px-6" v-for="field in fields" :key="field">
          {{ field }}
        </th>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            v-for="field in fields"
            :key="field"
          >
            {{ item.id }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Account } from "@/interfaces/account";
// import { TableData } from "@/interfaces/TableData";
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Table extends Vue {
  @Prop() msg!: string;
  @Prop() data!: Array<Account>;
  @Prop() fields!: [];
  mounted(): void {}
}
</script>

<style scoped></style>
