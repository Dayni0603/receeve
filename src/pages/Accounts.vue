<template>
  <div>
    <h5>Accounts</h5>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <Table :fields="fields" :data="accounts"></Table>
    </div>
  </div>
</template>
<script lang="ts">
import { Account } from "@/interfaces/account";
import { Component, Vue } from "vue-property-decorator";
import Table from "../components/Table.vue";
@Component({ components: { Table } })
export default class Accounts extends Vue {
  isVisible: boolean = false;
  accounts: Array<Account> = [];
  links: string = "";

  //An array of values for the data
  accountData: Array<any> = [];
  fields: Array<any> = ["#", "Name", "State", "Mobile", "Email"];
  async mounted() {
    this.fetchAccounts();
  }

  //methods
  async fetchAccounts(page: number = 1) {
    try {
      const res = await this.axios.get(`accounts?_page=${page}`);
      this.links = res.headers.link;
      this.accounts = res.data as Array<Account>;

      this.isVisible = true;
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
