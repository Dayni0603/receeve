<template>
  <div>
    <h5>Accounts</h5>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <TableComponent :columns="columns" :data="accounts" :actions="actions">
        <template>
          <i>hey</i>
        </template>
      </TableComponent>
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
    { text: "ID", field: "id" },
    { text: "Name", field: "name" },
    { text: "State", field: "state" },
    { text: "Mobile", field: "mobile" },
    { text: "Email", field: "email" },
  ];

  //An array of actions for the table
  actions: Array<Actions> = [{ name: "view", event: "" }];

  async mounted() {
    this.fetchAccounts();
  }

  //methods
  async fetchAccounts(page: number = 1) {
    try {
      const res = await this.axios.get(`accounts?_page=${page}`);
      this.links = res.headers.link;
      this.accounts = res.data as Array<Account>;
      console.log(this.accounts);
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
