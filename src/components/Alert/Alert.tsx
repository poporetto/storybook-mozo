import { type HTMLAttributes } from 'react'

export type AlertVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

export interface MozoAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  children: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
}

export function Alert({
  variant = 'primary',
  children,
  className = '',
  dismissible,
  onDismiss,
  ...rest
}: MozoAlertProps) {
  const classes = [
    'alert',
    `alert-${variant}`,
    dismissible ? 'alert-dismissible fade show' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} role="alert" {...rest}>
      {children}
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onDismiss}
        />
      )}
    </div>
  )
}

export function AlertHeading({ children, className = '', ...rest }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={`alert-heading ${className}`.trim()} {...rest}>
      {children}
    </h4>
  )
}

export function AlertLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className="alert-link" {...props} />
}
