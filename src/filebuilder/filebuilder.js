/* eslint-disable no-unused-vars */
import * as fs from 'fs'
import { csvToArray, getPageName } from '../lib/lib.js'
import { createHomePage, createPage } from '../uiBuilder/uiBuilder.js'
// eslint-disable-next-line no-unused-vars



export function buildPage2(csvFile) {
  const lastSlash = csvFile.lastIndexOf('/')
    // Eitthvað.html
  const fileName = `../../dist/${csvFile.substring(lastSlash+1, csvFile.length-4)  }.html`
  fs.readFile(csvFile, 'latin1', (err, data) => {
    if (err) throw err
    
    const arr = csvToArray(data)
        // Athuga hvort að fylkið uppfylli skilyrðin
        if (!arr || arr.length <= 2) return
        const html = createPage(getPageName(fileName),arr)
        fs.writeFileSync(fileName, html, (err2, _data) => {
          if (err2) throw err2
        })
  })

}

// export function buildHomePage(jsonFile) {
//   const lastSlash = jsonFile.lastIndexOf('/')
//   // Eitthvað.html
//   const fileName = `../../dist/${jsonFile.substring(lastSlash+1, jsonFile.length-5)  }.html`
//   readJSONFile(jsonFile, jsonString => {
//     const obj = JSON.parse(jsonString)
//     const html = createHomePage('Heimasíða', obj)
//     fs.writeFileSync(fileName, html, (err, _data) => {
//       if (err) throw err
//     })

//   })

 export function buildHomePage2(jsonFile) {
  const lastSlash = jsonFile.lastIndexOf('/')
  // Eitthvað.html
  const fileName = `../../dist/${jsonFile.substring(lastSlash+1, jsonFile.length-5)  }.html`
  fs.readFile(jsonFile, (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(jsonString)
    const html = createHomePage('Heimasíða', obj)
    fs.writeFileSync(fileName, html, (err2, _data) => {
      if (err2) throw err2
    })
  })

 } 

  


}