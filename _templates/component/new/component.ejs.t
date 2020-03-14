---
to: components/<%= name %>/index.vue
---
<template>
  <div>
    <div>{{title}}</div>
    <div v-if="saved">This template was saved</div>
  </div>
</template>

<script>
export default {
  name: "<%= name %>",
  props: {
    title: {
      type: String,
      default: "",
      required: false
    },
    saved: {
      type: Boolean,
      default: true,
      required: false
    },
  },
  methods: {
    someMethod() {

    }
  },
  created() {

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
</style>