import { getFileName } from '../lib/lib.js'
// 6 dálkar
export function createTableHeader(dataRow) {
  console.log(dataRow)
  return `
        <table>
            <thead>
                <tr>
                    <th>${dataRow[0]}</th>
                    <th>${dataRow[1]}</th>
                    <th>${dataRow[2]}</th>
                    <th>${dataRow[3]}</th>
                    <th>${dataRow[4]}</th>
                    <th>Hlekkur</th>
                </tr>
            </thead>
    `
}

export function createTableRow(dataRow) {
  return `
        <tbody>
            <tr>
                <td>${dataRow?.[0]}</td>
                <td>${dataRow?.[1]}</td>
                <td>${dataRow?.[2]}</td>
                <td>${dataRow?.[3]}</td>
                <td>${dataRow?.[4]}</td>
                <td>
                  <a href="${dataRow?.[5]}">
                    ${dataRow?.[5]}
                  </a>  
                </td>
            </tr>
        </tbody>
    `
}
export function closeTable() {
  return '</table>'
}

export function createTable(data) {

  if (!data || data.length <= 2) return null
  // Byrja á headernum
  let table = createTableHeader(data[0])

  //
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < data.length - 1; i++) {
    table += createTableRow(data?.[i])
  }
  table += closeTable()

  return table
}

export function htmlWrap(innerHtml) {
  return `
  <!DOCTYPE html>
  <html lang="is">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="../public/styles.css" />
    </head>
    <body>
      ${innerHtml}
    </body>
</html>`
}

export function createHTML(data) {
  const table = createTable(data)
  return htmlWrap(table)
}

export function createHomePage(data) {
  console.log(data)
  let html = ''
  data.forEach(object => {

    // Athuga hvort að csv fællinn er valid áður en við bætum því
    // í viðmótið
    html += `
      <div class="home-wrapper">
        <a href="./${getFileName(object?.csv)}.html">
          <h2>Titill: ${object?.title}</h2>
        </a>
        <p>Lýsing: ${object?.description}</p>
      </div>
      `
    })
  return htmlWrap(html)
}


