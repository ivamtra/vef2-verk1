import { csvToArray, readCSVFile } from '../filereader/filereader.js'

// 6 dálkar
export function createTableHeader(dataRow) {
  return `
        <table>
            <thead>
                <tr>
                    <th>${dataRow[0]}</th>
                    <th>${dataRow[1]}</th>
                    <th>${dataRow[2]}</th>
                    <th>${dataRow[3]}</th>
                    <th>${dataRow[4]}</th>
                    <th></th>
                </tr>
            </thead>
    `
}

export function createTableRow(dataRow) {
  return `
        <tbody>
            <tr>
                <td>${dataRow[0]}</td>
                <td>${dataRow[1]}</td>
                <td>${dataRow[2]}</td>
                <td>${dataRow[3]}</td>
                <td>${dataRow[4]}</td>
                <td>${dataRow[5]}</td>
            </tr>
        </tbody>
    `
}
export function closeTable() {
  return '</table>'
}

export function createTable(data) {
  // Byrja á headernum
  let table = createTableHeader(data[0])
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < data.length - 1; i++) {
    table += createTableRow(data[i])
  }
  table += closeTable()

  return table
}

readCSVFile('../data/hagfraedi.csv', (data) => {
  const arr = csvToArray(data)
  // console.log(data)

  const htmlTable = createTable(arr)
  console.log(htmlTable)
})
