import { create } from '@storybook/theming/create'

/**
 * Custom Storybook theme with Mozo branding.
 * Put your logo in: public/logo.png (or .svg, .jpg)
 * It will be served at /logo.png in Storybook.
 */
export default create({
  base: 'light',
  brandTitle: 'Mozo Design System',
  brandUrl: 'https://mozo.com.au',
  brandImage: '/logo.png',
  brandTarget: '_blank',
  colorPrimary: '#11322c',
})
