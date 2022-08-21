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

    <section
      class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6"
    >
      <div
        class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
      >
        <div class="px-6 py-5 font-semibold border-b border-gray-100">
          Accounts Info
        </div>
        <div class="p-4 flex-grow">
          <div
            class="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-2xl bg-gray-100 border border-gray-200 border-dashed rounded-md"
          >
            <div class="p-4">
              <span class="flex gap-2">
                <h5 class="">
                  Full Name:
                </h5>
                <span class=""
                  >{{ account.debtor.title }} {{ account.debtor.firstName }}
                  {{ account.debtor.lastName }}</span
                ></span
              >
              <span class="flex gap-2">
                <h5 class="">
                  State:
                </h5>
                <span class="">{{
                  account.debtor.address.state
                }}</span></span
              >

              <span class="flex gap-2">
                <h5 class="">
                  City:
                </h5>
                <span class="">{{
                  account.debtor.address.city
                }}</span></span
              >

              <span class="flex gap-2">
                <h5 class="">
                  Zip:
                </h5>
                <span class="">{{
                  account.debtor.address.zip
                }}</span></span
              >

              <span class="flex gap-2">
                <h5 class="">
                  Country:
                </h5>
                <span class="">{{
                  account.debtor.address.country
                }}</span></span
              >

              <span class="flex gap-2">
                <h5 class="">
                  Phone:
                </h5>
                <span class="">{{
                  account.debtor.mobilePhone
                }}</span></span
              >

              <span class="flex gap-2">
                <h5 class="">
                  Email:
                </h5>
                <span class="">{{
                  account.debtor.email
                }}</span></span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
      >
        <div class="px-6 py-5 font-semibold border-b border-gray-100">
          Claims
         
        </div>
        <div class="p-4 flex-grow">
          <div>
            <table>
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="py-3 px-6">
                    #
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Currency
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Base Amt.
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Fees
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Due Date
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(claim, index) in claims" :key="index">
                  <td scope="row">
                    {{ index + 1 }}
                  </td>
                  <td class="py-4 px-6">{{ claim.currency }}</td>
                  <td class="py-4 px-6">{{ claim.baseAmount }}</td>
                  <td class="py-4 px-6">{{ claim.fees }}</td>
                  <td class="py-4 px-6">{{ claim.dueDate }}</td>
                  <td class="py-4 px-6">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded "
                      aria-hidden
                      :class="attachStatusColor(claim.status)"
                      >{{ claim.status }}</span
                    >
                  </td>
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
      </div>
    </section>
  </main>
</template>
<script lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";
import Pagination from "@/components/Pagination.vue";
import { BreadcrumbPage } from "@/interfaces/breadcrumb";
import { Component, Vue } from "vue-property-decorator";
import { Account } from "../interfaces/account";
import { Claim } from "../interfaces/claim";

@Component({ components: { Pagination, Breadcrumb } })
export default class AccountDetail extends Vue {
  account: object = {} as Account;
  claims: Array<Claim> = [];
  pageLink: string = "";
  page: number = 1;
  totalPages: number = 1;

  //An array of fields for the breadcrumb Pages
  breadcrumbPages: Array<BreadcrumbPage> = [
    { page: "Home", url: "/" },
    { page: "Accounts", url: "accounts" },
    { page: "Detail" },
  ];

  columns: Array<any> = [
    { text: "Currency", field: "currency" },
    { text: "Base Amt", field: "baseAmount" },
    { text: "Fees", field: "fees" },
    { text: "Due Date", field: "dueDate" },
    { text: "Status", field: "status" },
  ];

  share() {
    console.log("hello share");
  }

  async mounted() {
    await this.fetchAccount(this.page);
    this.pageLink = window.location.href;
  }

  //methods
  async fetchAccount(page: number) {
    //verify that the route params is present on route else redirect user
    if (!this.$route.params.id) return this.$router.push("/");

    try {
      const res = await this.axios.get(`accounts?id=${this.$route.params.id}`);

      //check if data is available, then get claims
      if (res.data.length > 0) {
        this.account = res.data[0];
      }

      const resClaim = await this.axios.get(
        `claims?accountId=${this.$route.params.id}`
      );
      const dataCount = resClaim.data.length;
      let limit = 3;
      let data = resClaim.data.slice(0, limit);
      this.claims = data;
      this.totalPages = Math.ceil(dataCount / 3);
      this.page = page;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(page);
  }

  attachStatusColor(status: string): string {
    status = status.toLowerCase();
    if (status === "open") {
      return "bg-blue-200";
    } else if (status === "paid") {
      return "bg-green-200";
    } else {
      return "bg-pink-200";
    }
  }
  onPageChange(page: number) {
    this.page = page;
    this.fetchAccount(this.page);
  }
}
</script>
