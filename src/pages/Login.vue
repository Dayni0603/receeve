<template>
  <div>
    <h1>hello world</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  @Prop()
  msg!: string;
}
</script>
