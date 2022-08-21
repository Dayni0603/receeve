<template>
  <main class="p-6 sm:p-10 space-y-6">
    <div
      class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between"
    >
      <div class="mr-6">
        <h1 class="text-4xl font-semibold mb-2">Dashboard</h1>
        <Breadcrumb :pages="breadcrumbPages" />
      </div>
    </div>
    <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div
          class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            ></path>
          </svg>
        </div>
        <div>
          <span class="block text-2xl font-bold">{{
            formatMoney(totalClaims)
          }}</span>
          <span class="block text-gray-500">Total claims</span>
        </div>
      </div>
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div
          class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6"
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
          <span class="block text-2xl font-bold">
            {{ formatMoney(stats.paid) }}</span
          >
          <span class="block text-gray-500"> Paid claims</span>
        </div>
      </div>
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div
          class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16  text-blue-600 bg-blue-100 rounded-full mr-6"
        >
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div>
          <span class="inline-block text-2xl font-bold">{{
            formatMoney(stats.open)
          }}</span>

          <span class="block text-gray-500"> Open claims</span>
        </div>
      </div>
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div
          class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
            ></path>
          </svg>
        </div>
        <div>
          <span class="block text-2xl font-bold">
            {{ formatMoney(stats.deleted) }}</span
          >
          <span class="block text-gray-500"> Deleted claims</span>
        </div>
      </div>
    </section>
    <section
      class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6"
    >
      <div
        class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
      >
        <div class="px-6 py-2 font-semibold border-b border-gray-100">
          Claims by Months
        </div>
        <div class="p-4 flex-grow">
          <div
            class="flex items-center justify-center h-full px-4 py-4 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md"
          >
            <bar-chart
              v-if="Object.values(claimsChartSeries).length > 0"
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
      <div
        class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
      >
        <div class="px-6 py-2 font-semibold border-b border-gray-100">
          Claims by Status
        </div>
        <div class="p-4 flex-grow">
          <div
            class="flex items-center justify-center h-full px-4 py-4 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md"
          >
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
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Claim } from "@/interfaces/claim";
import { formatMoney } from "../../utils";

//charts
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import { BreadcrumbPage } from "@/interfaces/breadcrumb";

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

  breadcrumbPages: Array<BreadcrumbPage> = [
    { page: "Home", url: "/" },
    { page: "Dashboard" },
  ];

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
