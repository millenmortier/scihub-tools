import { sanitize } from './url'

describe('url#sanitize', () => {
  it('should trim off the hash and only return the protocol, host, and path', () => {
    const sanitized = sanitize(
      'https://example.com/somepath#somehash?somequery=1'
    )
    expect(sanitized).toBe('https://example.com/somepath')
  })
})
