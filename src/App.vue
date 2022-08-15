<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import SideNavigation from "./components/Navigation.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { SideNavigation } })
export default class App extends Vue {
  mounted(): void {}
}
</script>
