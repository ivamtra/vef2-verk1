// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from '@jest/globals'
import { buildPage } from './fileBuilder'

describe('buildPage', () => {
  it('Builds a page for a section', () => {
    expect(buildPage('asd')).toBeUndefined()
  })
})

describe('buildHomePage', () => {
  it('Builds the home page', () => {
    expect(buildPage('asd')).toBeUndefined()
  })
})
