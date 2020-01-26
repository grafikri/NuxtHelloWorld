<template>
  <div style="margin: 40px;">
    <button style="padding: 15px;" @click="handleClick">Make me logged in</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  middleware: "guest",
  methods: {
    handleClick() {
      console.log("click")
    }
  }
}
</script>

<style>
</style>