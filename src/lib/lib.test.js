// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from '@jest/globals'
import {
    csvToArray, deleteRow, getFileExtension,
    getFileName, getPageName, handleMisseri, handleNumber, handleURL, validURL
} from './lib'

describe('getFileExtenstion', () => {
    it('returns the file extension', () => {
        expect(getFileExtension('index.html')).toBe('.html')
    })
})

describe('getFileName', () => {
    it('gets the file name', () => {
        expect(getFileName('index.html')).toBe('index')
        expect(getFileName('hagfraedi.csv')).toBe('hagfraedi')
    })
})

describe('deleteRow', () => {
    it('deletes a given row in an array', () => {
        const arr = [1,2,3,4]
        expect(deleteRow(arr,2)).toEqual([1,2,4])
    })
}) 

describe('csvToArray', () => {
    it('converts a csv file to array', () => {
        const str = '1;2;3;4;5;6\n7;4;3;2;1;6'
        expect(csvToArray(str)).
            toStrictEqual([['1','2','3','4','5','6'], ['7','4','3','2','1','6']])
    })
})

describe('handleNumber', () => {
    it('Handles Icelandic numbers', () => {
        expect(handleNumber('6,75')).toBe('6,75')
        expect(handleNumber('6.8')).toBe('')
    })
})

describe ('handleMisseri', () => {
    it('Handles correct semesters', () => {
        expect(handleMisseri('Vor')).toBe('Vor')
        expect(handleMisseri('Vetur')).toBe('')
    })
})

describe('handleURL', () => {
    it('Returns the URL if it is valid', () => {
        expect(handleURL('https://www.youtube.com/')).toBe('https://www.youtube.com/')
    })
    it('Returns an empty string if url is not valid', () => {
        expect(handleURL('23abc,ds')).toBe('')
    })
})

describe('getPageName', () => {
    it('Returns the name of page given its path', () => {
        expect(getPageName('.././HomePage.html')).toBe('HomePage')
    })
})

describe('validURL', () => {
    it('returns true if url is valid', () => {
        expect(validURL('https://www.youtube.com/')).toBe(true)
    })
    it('returns false if url is not valid', () => {
        expect(validURL('23abc,ds')).toBe(false)
    })
})