import Vue from 'vue'

let arrStatus = []

let getStatusChangesOfScroll = function (el) {

  const { scrollTop, clientHeight, scrollHeight } = el
  let { distance } = el
  if (!distance) distance = 100

  let newVal
  let oldVal

  const result = scrollTop + clientHeight > scrollHeight - distance

  arrStatus.unshift(result)
  newVal = arrStatus[0]

  if (arrStatus.length === 2) {
    oldVal = arrStatus.pop()
  }

  // Preventing first out event
  if (oldVal === undefined) oldVal = false

  return oldVal === newVal ? "stable" : newVal ? "enter" : "out"

}

Vue.directive("my-scroll", {
  inserted(el, binding) {
    el.onscroll = (event) => {
      const status = getStatusChangesOfScroll(event.target)
      if (status !== "stable") {
        binding.value(status)
      }
    }
  }
})

