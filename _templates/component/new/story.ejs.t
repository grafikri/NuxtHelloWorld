---
to: <%= directory %>/<%= name %>/index.stories.js
---
import <%= name %> from './index.vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Distance from '../../../.storybook/decorators/distance';

export default {
  title: "<%= name %>",
  component: <%= name %>,
  decorators: [Distance, withKnobs]
}

export const WithKnobs = () => ({
  components: { <%= name %> },
  props: {
    title: {
      default: text('Text', 'Title')
    },
    saved: {
      default: boolean('Saved', false)
    }
  },
  template: '<<%= name %> :title="title" :saved="saved" />'
});
