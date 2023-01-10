import { slugify } from '@/slugify'

describe('slugify', () => {
  it('should replace whitespaces with dash', () => {
    expect(slugify('foo bar baz')).toBe('foo-bar-baz')
  })

  it('should remove duplicates of the replacement character', () => {
    expect(slugify('foo , bar')).toBe('foo-bar')
  })

  it('should remove trailing space', () => {
    expect(slugify(' foo bar baz ')).toBe('foo-bar-baz')
  })

  it('should remove not allowed chars', () => {
    expect(slugify('foo, bar baz')).toBe('foo-bar-baz')
    expect(slugify('foo- bar baz')).toBe('foo-bar-baz')
    expect(slugify('foo] bar baz')).toBe('foo-bar-baz')
    expect(slugify('foo  bar--baz')).toBe('foo-bar-baz')
  })
})
