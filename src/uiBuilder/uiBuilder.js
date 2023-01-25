import { getFileName, handleMisseri, handleNumber, handleURL } from '../lib/lib.js'
// 6 dálkar
export function createTableHeader(dataRow) {
  return `<thead>
  <tr>
    <th><button onclick="sort(0)">${dataRow[0]}</button></th>
    <th><button onclick="sort(1)">${dataRow[1]}</button></th>
    <th><button onclick="sort(2)">${dataRow[2]}</button></th>
    <th><button onclick="sort(3)">${dataRow[3]}</button></th>
    <th><button onclick="sort(4)">${dataRow[4]}</button></th>
    <th>Hlekkur</th>
  </tr>
</thead>
    `
}

export function createTableRow(dataRow) {
  // Birta bara ef áfanginn hefur heiti
  if (dataRow[1])
    return `
              <tr>
                  <td tabindex="0" data-label="Númer">${dataRow?.[0]}</td>
                  <td tabindex="0" data-label="Heiti">${dataRow?.[1]}</td>
                  <td tabindex="0" data-label="Einingar">${handleNumber(dataRow?.[2])}</td>
                  <td tabindex="0" data-label="Misseri">${handleMisseri(dataRow?.[3])}</td>
                  <td tabindex="0" data-label="Námstig">${dataRow?.[4]}</td>
                  <td tabindex="0" data-label="Hlekkur">
                    <a href="${handleURL(dataRow?.[5])}">
                      Námsskrá
                    </a>  
                  </td>
              </tr>
      `
  return ''
}


export function createTable(dataArr) {
  if (!dataArr || dataArr.length <= 2) return null

  // Bua til head og upphafsstilla body
  const tableHead = createTableHeader(dataArr[0])
  let tableBody = ''

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < dataArr.length; i++) {
    tableBody += createTableRow(dataArr[i])
  } 

  const table =
  `
    <table>
      <thead>
      ${tableHead}
      </thead>
      <tbody>
        ${tableBody}
      </tbody>
    </table>
  `  
  return table
}



// String => String
export function htmlWrap(title, innerHtml, isJson=false) {
  return `
  <!DOCTYPE html>
  <html lang="is">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="./public/styles.css" />
      <script src="./client.js" defer></script>
      ${isJson ? '<script src="./delete404links.js" defer></script>' : ''}
    </head>
    <body>
      <h1>${title}</h1>
      ${innerHtml}
    </body>
</html>`
}

// [[]] => Html string
export function createPage(title, data) {
  const table = createTable(data)
  return htmlWrap(title, table)
}

// [Obj] => Html string
export function createHomePage(title,indexData) {
  let html = ''
  indexData.forEach(object => {
    html += `
      <div class="home-wrapper">
        <a href="./${getFileName(object?.csv)}.html">
          <h2>Titill: ${object?.title}</h2>
        </a>
        <p>Lýsing: ${object?.description}</p>
      </div>
      `
    })
  return htmlWrap(title,html, true)
}


