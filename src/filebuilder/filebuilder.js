/* eslint-disable no-unused-vars */
import * as fs from 'fs'
import { csvToArray, getFileExtension, getPageName } from '../lib/lib.js'
import { createHomePage, createPage } from '../uiBuilder/uiBuilder.js'
// eslint-disable-next-line no-unused-vars



export function buildPage(csvFile) {
  if (getFileExtension(csvFile) !== '.csv') return
  const lastSlash = csvFile.lastIndexOf('/')
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

 export function buildHomePage(jsonFile) {
  if (getFileExtension(jsonFile) !== '.json') return
  const lastSlash = jsonFile.lastIndexOf('/')
  const fileName = `../../dist/${jsonFile.substring(lastSlash+1, jsonFile.length-5)  }.html`
  fs.readFile(jsonFile, (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data)
    const html = createHomePage('Heimasíða', obj)
    fs.writeFileSync(fileName, html, (err2, _data) => {
      if (err2) throw err2
    })
  })
 } 
