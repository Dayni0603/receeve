<template>
  <div class="flex justify-around">
    <div class="p-3 overflow-x-auto relative shadow-md sm:rounded-lg">
      <div>
        <h5 class="text-2xl text-gray-600 flex items-center">
        <i class="fa-solid fa-arrow-rotate-left"></i>
          Accounts Info
        </h5>
        <hr />
        <div class="p-4">
          <span class="flex gap-2">
            <h5 class="text-black flex items-center">
              Full Name:
            </h5>
            <span class="text-gray-600 flex items-center"
              >{{ account.debtor.title }} {{ account.debtor.firstName }}
              {{ account.debtor.lastName }}</span
            ></span
          >
          <span class="flex gap-2">
            <h5 class="text-black flex items-center">
              State:
            </h5>
            <span class="text-gray-600 flex items-center">{{
              account.debtor.address.state
            }}</span></span
          >

          <span class="flex gap-2">
            <h5 class="text-black flex items-center">
              City:
            </h5>
            <span class="text-gray-600 flex items-center">{{
              account.debtor.address.city
            }}</span></span
          >

          <span class="flex gap-2">
            <h5 class="text-black flex items-center">
              Zip:
            </h5>
            <span class="text-gray-600 flex items-center">{{
              account.debtor.address.zip
            }}</span></span
          >

          <span class="flex gap-2">
            <h5 class="text-black flex items-center">
              Country:
            </h5>
            <span class="text-gray-600 flex items-center">{{
              account.debtor.address.country
            }}</span></span
          >

          <span class="flex gap-2">
            <h5 class="text-black flex items-center">
              Phone:
            </h5>
            <span class="text-gray-600 flex items-center">{{
              account.debtor.mobilePhone
            }}</span></span
          >

          <span class="flex gap-2">
            <h5 class="text-black flex items-center">
              Email:
            </h5>
            <span class="text-gray-600 flex items-center">{{
              account.debtor.email
            }}</span></span
          >
        </div>
      </div>
    </div>
    <div class="p-3 overflow-x-auto relative shadow-md sm:rounded-lg">
      <div class="flex justify-between">
        <h5 class="text-2xl">Claims</h5>
        <p class="text-sm text-gray-600 flex items-center">
          <!-- <svg
            class="fill-current text-gray-500 w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
            />
          </svg>
          Share -->
          <font-awesome-icon icon="share" @click="share()" />
        </p>
      </div>
      <hr />
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
            <td
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Account } from "../interfaces/account";
import { Claim } from "../interfaces/claim";

@Component
export default class AccountDetail extends Vue {
  account: object = {} as Account;
  claims: Array<Claim> = [];
  pageLink: string = "";

  share() {
    console.log("hello share");
  }

  async mounted() {
    await this.fetchAccount();
    this.pageLink = window.location.href;
  }

  //methods
  async fetchAccount() {
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
      this.claims = resClaim.data as Array<Claim>;
    } catch (error) {
      console.log(error);
    }
  }

  attachStatusColor(status: string): string {
    status = status.toLowerCase();
    if (status === "open") {
      return "bg-blue-200";
    } else if (status === "paid") {
      return "bg-green-200";
    } else {
      return "bg-orange-200";
    }
  }
}
</script>
