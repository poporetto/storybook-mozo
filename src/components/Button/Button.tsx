import { type ButtonHTMLAttributes } from 'react'
import type { ButtonVariant, ButtonSize } from '../../design-tokens'

export interface MozoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Outline style (Bootstrap naming: outline-*) */
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
  href?: string
  /** Render as anchor when href is set */
  as?: 'button' | 'a'
}

const variantToClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  success: 'btn-success',
  danger: 'btn-danger',
  warning: 'btn-warning',
  info: 'btn-info',
  light: 'btn-light',
  dark: 'btn-dark',
  link: 'btn-link',
  'outline-primary': 'btn-outline-primary',
  'outline-secondary': 'btn-outline-secondary',
  'outline-success': 'btn-outline-success',
  'outline-danger': 'btn-outline-danger',
  'outline-warning': 'btn-outline-warning',
  'outline-info': 'btn-outline-info',
  'outline-light': 'btn-outline-light',
  'outline-dark': 'btn-outline-dark',
}

export function Button({
  variant = 'primary',
  size,
  children,
  className = '',
  active,
  disabled,
  href,
  as,
  ...rest
}: MozoButtonProps) {
  const sizeClass = size ? `btn-${size}` : ''
  const classes = ['btn', variantToClass[variant], sizeClass, className].filter(Boolean).join(' ')

  if (href || as === 'a') {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      aria-pressed={active}
      {...rest}
    >
      {children}
    </button>
  )
}
