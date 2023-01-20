// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from '@jest/globals'
import { createTableHeader } from './uiBuilder'

describe('csvToArray', () => {
  it('Poops', () => {
    expect(2 + 2).toBe(4)
  })
})

describe('createTableHeader', () => {
  const header =['Númer', 'Heiti', 'Einingar', 'Kennslumisseri', 'Námsstig']
  it('should create a header from data', () => {
    expect(createTableHeader(header)).toEqual(
      `
        <table>
          <thead>
            <tr>
              <th>Númer</th>
              <th>Heiti</th>
              <th>Einingar</th>
              <th>Kennslumisseri</th>
              <th>Námsstig</th>
              <th>Hlekkur</th>
            </tr>
          </thead>`)
  })
})
