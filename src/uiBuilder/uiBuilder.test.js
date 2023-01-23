// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from '@jest/globals'
import {
  createHomePage, createPage, createTable,
  createTableHeader, createTableRow, htmlWrap
} from './uiBuilder'



describe('createTableHeader', () => {
  const header =['Númer', 'Heiti', 'Einingar', 'Kennslumisseri', 'Námsstig']
  it('should create a header from data', () => {
    expect(createTableHeader(header)).toBeTruthy()
  })
})


describe('createTableRow', () => {
  const header =['Númer', 'Heiti', 'Einingar', 'Kennslumisseri', 'Námsstig', 'youtube.com']
  const invalid =['Númer', '', 'Einingar', 'Kennslumisseri', 'Námsstig', 'youtube.com']
  it('should create a row from data', () => {
    expect(createTableRow(header)).toBeTruthy()
  })
  it('should not create a row if a course has no name', () => {
    expect(createTableRow(invalid)).toBeFalsy()
  })
})

describe('createTable', () => {
  const arrValid = [['1','2','3','4','5'], ['asd','asd','qwe','fdsg','asdf','adsf'],
                     ['123','asdf','dsdf','sdfa','asf','asd']]
  const test1 = [['1','2','3','4','5']]
  const test2 = []
  const test3 = null

  it('should create an html table from a 2d array', () => {
    expect(createTable(arrValid)).toBeTruthy()

  })
  it('should return null if table is not valid', () => {
    expect(createTable(test1)).toBeFalsy()
    expect(createTable(test2)).toBeFalsy()
    expect(createTable(test3)).toBeFalsy()

  })
})

describe('htmlWrap', () => {
  it('Wraps an html string in boilerplate', () => {
    expect(htmlWrap('asdasd')).toBeTruthy()
  })
})

describe('createPage', () => {
  const arrValid = [['1','2','3','4','5'], ['asd','asd','qwe','fdsg','asdf','adsf'],
                     ['123','asdf','dsdf','sdfa','asf','asd']]
  it('Creates a page for a given sector', () => {
    expect(createPage('Title', arrValid)).toContain('Title')
    expect(createPage('Title', arrValid)).toContain(arrValid[0][3])
  })
})

describe('createHomePage', () => {

  it('Creates the homepage for JSON data', () => {
    expect(createHomePage('title', [{description: 'description', csv: 'dummy.csv'}])).
      toContain('title')
    expect(createHomePage('title', [{description: 'description', csv: 'dummy.csv'}])).
      toContain('description')
  })
})