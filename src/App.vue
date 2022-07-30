<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  mounted(): void {
    console.log("let's go");
  }
}
</script>
