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
    </div>
  </div>
</template>
<script lang="ts">
import { Account } from "@/interfaces/account";
import { Actions } from "@/interfaces/TableData";
import { Component, Vue } from "vue-property-decorator";
import TableComponent from "../components/Table-Component.vue";
@Component({ components: { TableComponent } })
export default class Accounts extends Vue {
  accounts: Array<Account> = [];
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
    this.fetchAccounts();
  }

  formatDate(data: any) {
    console.log(data);
  }

  //methods
  async fetchAccounts(page: number = 1) {
    try {
      const res = await this.axios.get(`accounts?_page=${page}`);
      this.links = res.headers.link;
      this.accounts = res.data as Array<Account>;
    } catch (error) {
      console.log(error);
    }
  }

  //Getters
  get pageNums(): Array<string> {
    let splitLinks = this.links.split(",");
    splitLinks.map((link, index) => {
      let strLink = link.split(";")[0];
      strLink = strLink.replace(/[<>]/g, "");
      splitLinks[index] = strLink.split("=")[1];
    });

    return splitLinks;
  }
}
</script>
