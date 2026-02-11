/**
 * Mozo Design System – Design Tokens
 * Aligned with https://mozo.com.au/ and Bootstrap 5.3
 */

export const tokens = {
  color: {
    primary: '#11322c',
    primaryRgb: '17, 50, 44',
    primaryEmphasis: '#0a1f1b',
    primaryBgSubtle: '#d4e0de',
    primaryBorderSubtle: '#a9c2be',
    white: '#ffffff',
    black: '#000000',
  },
  typography: {
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSizeBase: '1rem',
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  spacing: {
    borderRadius: 'var(--bs-border-radius)',
    borderRadiusSm: 'var(--bs-border-radius-sm)',
    borderRadiusLg: 'var(--bs-border-radius-lg)',
  },
} as const

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark'
export type ButtonSize = 'sm' | 'md' | 'lg'
