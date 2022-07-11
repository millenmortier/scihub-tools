import { URL } from 'url'

/**
 * Trims off the hash
 *
 * @param url a url, potentially with hash
 * @returns a url without has
 */
export const sanitize = (url: string) => {
  const { protocol, host, pathname } = new URL(url)
  return `${protocol}//${host}${pathname}`
}
