<template>
  <div class="flex bg-gray-100 min-h-screen">
    <aside class="flex flex-col">
      <a
        href="#"
        class="inline-flex items-center justify-center h-20 w-full bg-blue-600 hover:bg-blue-500 focus:bg-blue-500"
      >
        <img src="@/assets/logo.png" alt="LOGO" width="45px" />
        <span class="text-2xl pb-1.5" style="{color:aqua}">ceeve</span>
      </a>
      <div
        class="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800"
      >
        <nav class="flex flex-col mx-4 my-6 space-y-4">
          <router-link
            tag="li"
            to="/home"
            exact-active-class="exact-active"
            class="inline-flex items-center py-3 text-blue-600 rounded-lg px-2"
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span class="ml-2" x-show="menu">Dashboard</span>
          </router-link>

          <router-link
            tag="li"
            to="/accounts"
            exact-active-class="exact-active"
            class="inline-flex items-center py-3 text-blue-600 rounded-lg px-2"
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
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span class="ml-2" x-show="menu">Accounts</span>
          </router-link>
        </nav>
        <div class="flex justify-end">
          <a
            class="inline-flex p-3 hover:text-gray-400 justify-center border-gray-700 h-15 w-full border-t hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 px-2"
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="ml-2" x-show="menu">Settings</span>
          </a>
        </div>
      </div>
    </aside>
    <div class="flex-grow text-gray-800">
      <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
        <div class="mr-8 cursor-pointer">
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div class="relative w-full max-w-md sm:-ml-2">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="text"
            role="search"
            placeholder="Search..."
            class="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
          />
        </div>
        <div class="flex flex-shrink-0 items-center ml-auto">
          <button
            class="relative inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg"
          >
            <span class="sr-only">User Menu</span>
            <div
              class="hidden md:flex md:flex-col md:items-end md:leading-tight"
            >
              <span class="font-semibold">Danayit Mulugeta</span>
              <span class="text-sm text-gray-600">Full-stack Developer</span>
            </div>
            <span
              class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden"
            >
              <img
                src="https://randomuser.me/api/portraits/women/10.jpg"
                alt="user profile photo"
                class="h-full w-full object-cover"
              />
            </span>
          </button>
          <div
            class="absolute top-20 bg-white border rounded-md p-2 w-56"
            x-show="panel"
            style="display:none"
          >
            <div class="p-2 hover:bg-blue-100 cursor-pointer">Profile</div>
            <div class="p-2 hover:bg-blue-100 cursor-pointer">Messages</div>
            <div class="p-2 hover:bg-blue-100 cursor-pointer">To-Do's</div>
          </div>
          <div class="border-l pl-3 ml-3 space-x-1">
            <button
              class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
            >
              <span class="sr-only">Notifications</span>
              <span
                class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"
              ></span>
              <span
                class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"
              ></span>
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button
              class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
              @click="logOut()"
            >
              <span class="sr-only">Log out</span>
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Navigation extends Vue {
  @Prop()
  msg!: string;
  logOut() {
    console.log("logging out");
    this.$router.push("/login");
  }
}
</script>
<style>
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: #fff;
  cursor: pointer;
}
</style>
