// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from '@jest/globals'
import { readCSVFile, readDirectory, readJSONFile } from './filereader'




describe('readCSVFile', () => {
  it('Returns void if file is not csv', () => {
    expect(readCSVFile('index.html', x => x)).toBeUndefined()
  })
})


describe('readJSONFile', () => {
  it('Returns void if file is not JSON', () => {
    expect(readJSONFile('index.html', x => x)).toBeUndefined()
  })
})

describe('readDirectory', () => {
  it('reads a directory', () => {
    expect(readDirectory('.', x => x)).toBeUndefined()
  })
})

