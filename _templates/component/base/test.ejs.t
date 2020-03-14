---
to: app/<%= name %>/index.test.js
---
import <%= name %> from './index'
import { mount } from '@vue/test-utils'
import Vue from 'vue'


it("Test name", async () => {
  const wrapper = mount(<%= name %>, {
    // Some probs
  })

  expect(true).toBe(true)
})

