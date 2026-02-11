import type { Preview } from '@storybook/react'
import '../src/styles/mozo-theme.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f8f9fa' },
        { name: 'dark', value: '#11322c' },
      ],
    },
  },
}

export default preview
