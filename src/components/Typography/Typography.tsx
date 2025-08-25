import { memo, type ReactNode, type JSX } from 'react'
import clsx from 'clsx'
import styles from './Typography.module.css'

type TypographyVariant = 'h1' | 'h3' | 'h4' | 'text'

interface TypographyProps {
  variant?: TypographyVariant
  children: ReactNode
  className?: string
}

const variantClasses: Record<TypographyVariant, string> = {
  h1: styles['text-h1'],
  h3: styles['text-h3'],
  h4: styles['text-h4'],
  text: styles['text-base'],
}

const defaultTags: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h3: 'h3',
  h4: 'h4',
  text: 'span',
}

export const Typography = memo<TypographyProps>(
  ({ variant = 'text', children, className }) => {
    const Component = defaultTags[variant]
    const classes = clsx(styles.typography, variantClasses[variant], className)

    return <Component className={classes}>{children}</Component>
  },
)

Typography.displayName = 'Typography'
