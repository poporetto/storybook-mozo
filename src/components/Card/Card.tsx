import { type HTMLAttributes } from 'react'

export interface MozoCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ children, className = '', ...rest }: MozoCardProps) {
  return (
    <div className={`card ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...rest }: MozoCardProps) {
  return (
    <div className={`card-header ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '', ...rest }: MozoCardProps) {
  return (
    <div className={`card-body ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...rest }: MozoCardProps) {
  return (
    <div className={`card-footer ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', ...rest }: MozoCardProps) {
  return (
    <h5 className={`card-title ${className}`.trim()} {...rest}>
      {children}
    </h5>
  )
}

export function CardSubtitle({ children, className = '', ...rest }: MozoCardProps) {
  return (
    <h6 className={`card-subtitle mb-2 text-body-secondary ${className}`.trim()} {...rest}>
      {children}
    </h6>
  )
}

export function CardText({ children, className = '', ...rest }: MozoCardProps) {
  return (
    <p className={`card-text ${className}`.trim()} {...rest}>
      {children}
    </p>
  )
}

export function CardImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className="card-img-top" {...props} alt={props.alt ?? ''} />
}

export function CardLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className="card-link" {...props} />
}
