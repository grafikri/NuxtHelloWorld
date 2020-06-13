
const install = function (Vue) {
  Vue.directive("my-scroll", directive)
}

const directive = {
  inserted(el, binding) {
    el.onscroll = (event) => {
      const status = getStatusChangesOfScroll(event.target)
      if (status !== "stable") {
        binding.value(status)
      }
    }
  }
}


const arrStatus = []

const getStatusChangesOfScroll = function (el) {

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

export default {
  install
}

