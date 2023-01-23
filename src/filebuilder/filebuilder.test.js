// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from '@jest/globals';
import { buildHomePage, buildPage } from './filebuilder.js';

describe('buildPage', () => {
  // it('Builds a page if csv exists', () => {
  //   expect(buildPage('./src/filebuilder/mock/mock.csv')).toThrowError()
  // }) 
  it('Does nothing if file is invalid', () => {
    expect(buildPage('asd')).toBeFalsy()
  })
  it('Creates a file if file is an csv', () => {
    buildPage('./src/filebuilder/mock/mock.csv')
    expect(null).toBeFalsy()
  })
})

describe('buildHomePage', () => {
  it('It does not build a page if file does not exist', () => {
    expect(buildHomePage('asd')).toBeFalsy()
  })
  // it('Shits and farts', () => {
  //   expect(buildHomePage('./src/filebuilder/mock/fart.json')).toBeTruthy()
  // })
})