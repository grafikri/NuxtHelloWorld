// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'directory',
    message: "What's the directory?"
  },
  {
    type: 'input',
    name: 'name',
    message: "What's component name?"
  }
]
