import { type InputHTMLAttributes, type LabelHTMLAttributes } from 'react'

export interface MozoInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  size?: 'sm' | 'lg'
}

export function Input({
  label,
  hint,
  error,
  size,
  id,
  className = '',
  ...rest
}: MozoInputProps) {
  const inputId = id ?? `mozo-input-${Math.random().toString(36).slice(2, 9)}`
  const hasError = Boolean(error)

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`form-control ${size ? `form-control-${size}` : ''} ${hasError ? 'is-invalid' : ''} ${className}`.trim()}
        aria-invalid={hasError}
        aria-describedby={hint ? `${inputId}-hint` : hasError ? `${inputId}-error` : undefined}
        {...rest}
      />
      {hint && (
        <div id={`${inputId}-hint`} className="form-text">
          {hint}
        </div>
      )}
      {error && (
        <div id={`${inputId}-error`} className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  )
}

export interface MozoLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export function FormLabel({ children, className = '', ...rest }: MozoLabelProps) {
  return (
    <label className={`form-label ${className}`.trim()} {...rest}>
      {children}
    </label>
  )
}
