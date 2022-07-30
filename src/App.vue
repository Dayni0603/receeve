<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import SideNavigation from "./components/SideNavigation.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { Challenge, SideNavigation } })
export default class App extends Vue {
  mounted(): void {
    console.log("let's go");
  }
}
</script>
