<template>
  <div class="flex flex-col">
    <div class="py-5">
      <main class="h-full overflow-y-auto">
        <div class="container  mx-auto grid">
          <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <div
              class="flex items-center p-4 bg-white rounded-lg shadow dark:bg-gray-800"
            >
              <div
                class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  ></path>
                </svg>
              </div>
              <div>
                <p
                  class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Total claims
                </p>
                <p
                  class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                >
                  {{ formatMoney(totalClaims) }}
                </p>
              </div>
            </div>

            <div
              class="flex items-center p-4 bg-white rounded-lg shadow dark:bg-gray-800"
            >
              <div
                class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p
                  class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Paid claims
                </p>
                <p
                  class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                >
                  {{ formatMoney(stats.paid) }}
                </p>
              </div>
            </div>

            <div
              class="flex items-center p-4 bg-white rounded-lg shadow dark:bg-gray-800"
            >
              <div
                class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p
                  class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Open claims
                </p>
                <p
                  class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                >
                  {{ formatMoney(stats.open) }}
                </p>
              </div>
            </div>

            <div
              class="flex items-center p-4 bg-white rounded-lg shadow dark:bg-gray-800"
            >
              <div
                class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  ></path>
                </svg>
              </div>
              <div>
                <p
                  class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Deleted claims
                </p>
                <p
                  class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                >
                  {{ formatMoney(stats.deleted) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div class="flex">
      <div class="p-3 overflow-x-auto relative shadow-md sm:rounded-lg">
        <h5 class="text-2xl text-gray-600 flex items-center">
          <svg
            class="fill-current text-gray-500 w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
            />
          </svg>
          Claims by Months
        </h5>
        <div class="">
          <bar-chart
            v-if="Object.values(claimsChartSingle).length > 0"
            :height="400"
            :chart-data="
              BarChartMonths(
                'Claims by Month',
                claimsChartSingle,
                '#93C5FD',
                'single'
              )
            "
            :options="{ maintainAspectRatio: false }"
          ></bar-chart>
        </div>
      </div>
      <div class="p-3 overflow-x-auto relative shadow-md sm:rounded-lg">
        <h5 class="text-2xl text-gray-600 flex items-center">
          <svg
            class="fill-current text-gray-500 w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
            />
          </svg>
          Claims by Status
        </h5>
        <div class="">
          <pie-chart
            v-if="stats.open"
            :height="400"
            :chart-data="
              PieChartStatus('Claims by Month', stats, [
                '#34D399',
                '#818CF8',
                '#FCA5A5',
              ])
            "
            :options="{ maintainAspectRatio: false }"
          ></pie-chart>
        </div>
      </div>
    </div>
    <div class="p-4 overflow-x-auto relative shadow-md sm:rounded-lg">
      <h5 class="text-2xl text-gray-600 flex items-center">
        <svg
          class="fill-current text-gray-500 w-3 h-3 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
          />
        </svg>
        Claims by Status Per Month
      </h5>
      <div class="">
        <bar-chart
          v-if="Object.values(claimsChartSeries).length > 0"
          :height="400"
          :chart-data="
            BarChartMonths(
              'Claims by Month',
              claimsChartSeries,
              ['#818CF8', '#34D399', '#FCA5A5'],
              'series'
            )
          "
          :options="{ maintainAspectRatio: false }"
        ></bar-chart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Claim } from "@/interfaces/claim";
import { formatMoney } from "../../utils";

//charts
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";

@Component({
  components: {
    BarChart,
    PieChart,
  },
})
export default class Dashboard extends Vue {
  //data definitions
  claims: Array<Claim> = [];
  total: number = 0;
  paid: number = 0;
  open: number = 0;

  chartOptions: object = {
    lineSmooth: false,
    fullWidth: true,
  };

  async mounted() {
    await this.fetchClaims();
  }

  //computed
  get stats(): object {
    let paid: number = 0;
    let open: number = 0;
    let deleted: number = 0;

    this.claims.map((claim) => {
      paid += claim.status === "PAID" ? claim.fees : 0;
      open += claim.status === "OPEN" ? claim.fees : 0;
      deleted += claim.status === "DELETED" ? claim.fees : 0;
    });

    return { paid, open, deleted };
  }

  get totalClaims() {
    let total = 0;
    this.claims.map((claim) => {
      total += claim.fees as number;
    });
    return total;
  }

  get claimsChartSingle() {
    return this.claims.reduce((accumulator, claim) => {
      const month = claim.dueDate.substr(0, 7);
      if (!accumulator[month]) accumulator[month] = 0;
      accumulator[month] += claim.fees / 100; //Divide currency by 100 to show actual value
      return accumulator;
    }, {} as any);
  }

  get claimsChartSeries() {
    return this.claims.reduce((accumulator, claim) => {
      const month = claim.dueDate.substr(0, 7);
      if (!accumulator[month]) accumulator[month] = [0, 0, 0];

      switch (claim.status) {
        case "OPEN":
          accumulator[month][0] += claim.fees / 100; //Divide currency by 100 to show actual value
          break;
        case "PAID":
          accumulator[month][1] += claim.fees / 100; //Divide currency by 100 to show actual value
          break;
        case "DELETED":
          accumulator[month][2] += claim.fees / 100; //Divide currency by 100 to show actual value
          break;
      }

      return accumulator;
    }, {} as any);
  }

  //methods
  async fetchClaims() {
    try {
      const res = await this.axios.get("claims");
      this.claims = res.data as Array<Claim>;
    } catch (error) {
      console.log(error);
    }
  }

  //Format currency
  formatMoney(amount: number): string {
    return formatMoney(amount);
  }

  //format data into chart canvas requirements
  BarChartMonths(label = "", dataset: any, color: any, type = "") {
    let formattedData = {};
    if (type === "single") {
      formattedData = {
        labels: Object.keys(dataset),
        datasets: [
          {
            label,
            backgroundColor: color,
            data: Object.values(dataset),
          },
        ],
      };
    } else {
      const dataObj = {
        open: [] as Array<number>,
        paid: [] as Array<number>,
        deleted: [] as Array<number>,
      };

      Object.keys(dataset).map((month: any) => {
        dataObj.open.push(dataset[month][0]);
        dataObj.paid.push(dataset[month][1]);
        dataObj.deleted.push(dataset[month][2]);
      });

      formattedData = {
        labels: Object.keys(dataset),
        datasets: [
          {
            label: "OPEN",
            backgroundColor: color[0],
            data: dataObj.open,
          },
          {
            label: "PAID",
            backgroundColor: color[1],
            data: dataObj.paid,
          },
          {
            label: "DELETED",
            backgroundColor: color[2],
            data: dataObj.deleted,
          },
        ],
      };
    }

    return formattedData;
  }

  //format data into chart canvas requirements
  PieChartStatus(label = "", dataset: object, color: any) {
    const formattedData = {
      labels: ["PAID", "OPEN", "DELETED"],
      datasets: [
        {
          label,
          backgroundColor: color,
          data: Object.values(this.stats),
        },
      ],
    };

    return formattedData;
  }
}
</script>
