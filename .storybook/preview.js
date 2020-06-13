/**
 * Proje ayağa kalkmadan önce storybook tarafından çalıştırılan dosyadır.
 * vue plugin yüklemek, yada diğer initial işlemler için kullanılır.
 */

import customViewport from "./customViewport"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import { addParameters } from '@storybook/client-api'


addParameters({
  viewport: {
    viewports: {
      ...customViewport,
      ...INITIAL_VIEWPORTS
    }, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'bootstrapMd',
  },
})