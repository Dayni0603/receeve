<template>
  <div>
    <h5>Accounts</h5>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">
              #
            </th>
            <th scope="col" class="py-3 px-6">
              Name
            </th>
            <th scope="col" class="py-3 px-6">
              State
            </th>
            <th scope="col" class="py-3 px-6">
              Mobile
            </th>
            <th scope="col" class="py-3 px-6">
              Email
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            v-for="(account, index) in accounts"
            :key="index"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ index + 1 }}
            </th>
            <td class="py-4 px-6">
              {{ account.debtor.title }}{{ account.debtor.firstName }}
              {{ account.debtor.lastName }}
            </td>
            <td class="py-4 px-6">
              {{ account.debtor.address.state }}
            </td>
            <td class="py-4 px-6">
              {{ account.debtor.mobilePhone }}
            </td>
            <td class="py-4 px-6">
              {{ account.debtor.email }}
            </td>
            <td class="py-4 px-6">
              <button
                type="button"
                @click="$router.push(`account-details/${account.id}`)"
                class="inline-block text-gray-500 hover:text-gray-700"
              >
                <svg
                  class="inline-block h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Account } from "@/interfaces/account";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Accounts extends Vue {
  accounts: Array<Account> = [];
  links: string = "";

  async mounted() {
    this.fetchAccounts();
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
