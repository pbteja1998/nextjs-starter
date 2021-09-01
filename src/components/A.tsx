import Link from 'next/link'

export function A(
  props: React.AllHTMLAttributes<HTMLAnchorElement>
): JSX.Element {
  const { href, children, ...rest } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a {...rest}>{children}</a>
      </Link>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  )
}
