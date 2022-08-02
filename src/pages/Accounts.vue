<template>
  <div>
    <h5>Accounts</h5>
    <div class="flex flex-col gap-3.5">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    TITLE
                  </th>
                  <th
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    NAME
                  </th>
                  <th
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    STATE
                  </th>
                  <th
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    MOBILE
                  </th>
                  <th
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    EMAIL
                  </th>
                  <th
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b"
                  v-for="(account, index) in accounts"
                  :key="index"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ account.debtor.title }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ account.debtor.firstName }} {{ account.debtor.lastName }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ account.debtor.address.state }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ account.debtor.mobilePhone }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ account.debtor.email }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <button
                      type="button"
                      @click="$router.push(`account-details/${account.id}`)"
                      class="btn btn-main btn-action"
                    >
                      Details <span class="las la-arrow-right"></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px">
          <li>
            <a
              class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Previous</a
            >
          </li>
          <li>
            <a
              class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >1</a
            >
          </li>
          <li>
            <a
              class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Next</a
            >
          </li>
        </ul>
      </nav>
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
