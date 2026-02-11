import { type HTMLAttributes } from 'react'

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'rounded-pill'

export interface MozoBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children: React.ReactNode
  pill?: boolean
}

const variantToClass: Record<Exclude<BadgeVariant, 'rounded-pill'>, string> = {
  primary: 'text-bg-primary',
  secondary: 'text-bg-secondary',
  success: 'text-bg-success',
  danger: 'text-bg-danger',
  warning: 'text-bg-warning',
  info: 'text-bg-info',
  light: 'text-bg-light',
  dark: 'text-bg-dark',
}

export function Badge({
  variant = 'primary',
  children,
  className = '',
  pill,
  ...rest
}: MozoBadgeProps) {
  const pillClass = pill || variant === 'rounded-pill' ? 'rounded-pill' : ''
  const variantClass = variant === 'rounded-pill' ? 'text-bg-primary' : variantToClass[variant]
  const classes = ['badge', variantClass, pillClass, className].filter(Boolean).join(' ')
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  )
}
