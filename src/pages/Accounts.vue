<template>
  <main class="p-6 sm:p-10 space-y-6">
    <div
      class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between"
    >
      <div class="mr-6">
        <h1 class="text-4xl font-semibold mb-2">Accounts</h1>
        <Breadcrumb :pages="breadcrumbPages" />
      </div>
    </div>
    <section class="">
      <div class="p-8 bg-white shadow rounded-lg">
        <table>
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <th scope="col" class="py-3 px-6">#</th>
            <th scope="col" class="py-3 px-6" v-for="column in columns" :key="column.id">
              {{ column.text }}
            </th>
            <th v-if="actions !== undefined && actions.length != 0">Actions</th>
          </thead>
          <tbody>
            <tr v-for="(item, i) in accounts" :key="item.id">
              <td scope="row" class="py-2 px-3">
                <span> {{ i + 1 }}</span>
              </td>
              <td scope="row" class="py-2 px-3">
                <span>
                  {{ item.debtor.title }} {{ item.debtor.firstName }}
                  {{ item.debtor.lastName }}</span
                >
              </td>
              <td scope="row" class="py-2 px-3">
                <span>{{ item.debtor.address.state }}</span>
              </td>
              <td scope="row" class="py-2 px-3">
                <span>{{ item.debtor.mobilePhone }}</span>
              </td>
              <td scope="row" class="py-2 px-3">
                <span>{{ item.debtor.email }}</span>
              </td>
              <td scope="row" class="py-2 px-3">
                <a @click="$router.push(`accounts/detail/${item.id}`)"
                  ><small>view</small></a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination-container py-4">
          <Pagination
            :totalPages="totalPages"
            :page="page"
            @clicked="onPageChange"
          />
        </div>
      </div>
    </section>
  </main>
</template>
<script lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";
import { Account } from "@/interfaces/account";
import { BreadcrumbPage } from "@/interfaces/breadcrumb";
import { Actions } from "@/interfaces/TableData";
import { Component, Vue } from "vue-property-decorator";
import Pagination from "../components/Pagination.vue";
@Component({ components: { Pagination, Breadcrumb } })
export default class Accounts extends Vue {
  accounts: Array<Account> = [];
  page: number = 1;
  totalPages: number = 1;
  links: string = "";

  //An array of fields for the breadcrumb Pages
  breadcrumbPages: Array<BreadcrumbPage> = [
    { page: "Home", url: "/" },
    { page: "Accounts", url: "/accounts" },
  ];

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
