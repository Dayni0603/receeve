<template>
  <div>
    <h5>Accounts</h5>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table>
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
            {{ column.text }}
          </th>
          <th v-if="actions !== undefined && actions.length != 0">Actions</th>
        </thead>
        <tbody>
          <tr v-for="(item, i) in accounts" :key="item.id">
            <td scope="row">
              <span
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ i + 1 }}</span
              >
            </td>
            <td scope="row">
              <span
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ item.debtor.title }} {{ item.debtor.firstName }}
                {{ item.debtor.lastName }}</span
              >
            </td>
            <td scope="row">
              <span
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >{{ item.debtor.address.state }}</span
              >
            </td>
            <td scope="row">
              <span
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >{{ item.debtor.mobilePhone }}</span
              >
            </td>
            <td scope="row">
              <span
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >{{ item.debtor.email }}</span
              >
            </td>
            <td scope="row">
              <a @click="$router.push(`accounts/detail/${item.id}`)">detail</a>
            </td>
            <!-- <th v-if="actions !== undefined && actions.length != 0">
              <span
                v-for="(action, a) in actions"
                :key="a"
                class="py-4 px-6 text-gray-900 whitespace-nowrap"
              >
                <span @click="action.event">{{ action.name }}</span>
              </span>
            </th> -->
          </tr>
        </tbody>
      </table>
      <div class="pagination-container py pb-3">
        <Pagination
          :totalPages="totalPages"
          :page="page"
          @clicked="onPageChange"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Account } from "@/interfaces/account";
import { Actions } from "@/interfaces/TableData";
import { Component, Vue } from "vue-property-decorator";
import Pagination from "../components/Pagination.vue";
@Component({ components: { Pagination } })
export default class Accounts extends Vue {
  accounts: Array<Account> = [];
  page: number = 1;
  totalPages: number = 1;
  links: string = "";

  //An array of fields for the data
  columns: Array<any> = [
    { text: "Name", field: "debtor", name: "name" },
    { text: "State", field: "debtor", name: "state" },
    { text: "Mobile", field: "debtor", name: "mobile" },
    { text: "Email", field: "debtor", name: "email" },
  ];

  //An array of actions for the table
  actions: Array<Actions> = [{ name: "view", event: "" }];

  async mounted() {
    this.fetchAccounts(this.page);
  }

  //methods
  async fetchAccounts(page: number) {
    try {
      const res = await this.axios.get(`accounts?_page=${this.page}`);
      const count = await this.axios.get(`accounts`);
      const dataCount = count.data.length;
      this.links = res.headers.link;
      this.totalPages = Math.ceil(dataCount / 10);
      this.accounts = res.data as Array<Account>;
      this.page = page;
      console.log(this.totalPages);
    } catch (error) {
      console.log(error);
    }
  }
  onPageChange(page: number) {
    this.page = page;
    this.fetchAccounts(this.page);
  }
}
</script>
