<template>
  <div>
    <div v-my-scroll="handleMyScroll"
         class="custom-area"
         ref="custom">
      Nibh integer ligula commodo diam suspendisse iaculis quisque elementum, consequat ultrices turpis natoque est habitasse eget porta rutrum, velit urna lacinia viverra pretium mauris ultricies. Sed taciti libero tellus conubia pretium consequat
      himenaeos litora, porta dictumst lorem ipsum ante ligula justo. Scelerisque lectus magnis penatibus mi elit mus lobortis, ridiculus ornare porta aptent curae quam tortor sed, est dictum nec tristique pellentesque iaculis. Non mi tincidunt
      iaculis risus porttitor platea vel, tempor hendrerit laoreet vehicula rhoncus elementum. Eleifend torquent proin risus ipsum sit pellentesque maecenas vulputate inceptos feugiat, convallis semper pharetra dis magna habitant aenean sagittis
      massa eget, facilisis at interdum dictum adipiscing platea ullamcorper vel vehicula. Est montes vulputate dis dapibus nibh magna ut porttitor consequat, pharetra morbi ad suspendisse luctus consectetur facilisi. Rutrum ultricies amet consequat
      phasellus aptent molestie penatibus aenean class nostra, ante suspendisse vitae at taciti massa accumsan adipiscing purus, mauris vestibulum libero sollicitudin maecenas sapien vivamus elementum proin.
    </div>

  </div>
</template>

<script>
export default {
  name: "Dummy",
  mounted() {
    // this.$refs.custom.onscroll = (event) => {
    //   const { scrollTop } = event.target
    //   console.log("event!: ", event.target)
    // }
  },
  methods: {
    // handleScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
    //   console.log("event: ", scrollTop)
    // }
    handleMyScroll(payload) {
      console.log("this is my internal method: ", payload)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-area {
  margin: auto;
  width: 400px;
  height: 200px;
  overflow: auto;
}
</style>