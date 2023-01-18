// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from '@jest/globals'
import { getFileExtension, getFileName } from './lib'

describe('It returns the file extension of a string', () => {
    it('returns the file extension', () => {
        expect(getFileExtension('index.html')).toBe('.html')
    })
})

describe('It gets the file name of a string', () => {
    it('gets the file name', () => {
        expect(getFileName('index.html')).toBe('index')
        expect(getFileName('hagfraedi.csv')).toBe('hagfraedi')
    })
})