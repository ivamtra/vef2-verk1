import * as fs from 'fs';
import { deleteRow } from '../lib/lib.js';

export function csvToArray(csv) {
  const rows = csv.split('\n')
  let arr = rows.map((row) => row.split(';'))

  // Athuga ef raðir eru löglegar
  const rowsToDelete = []
  arr.forEach((row,index) => {
    if (row.length !== 6) {
      console.log(index)
      rowsToDelete.push(index)
    }
  })
  
  // Eyða þeim ef þær passa ekki
  while (rowsToDelete.length > 0) {
    arr = deleteRow(arr, rowsToDelete.pop())
  }

  return arr
}


export function readJSONFile(filepath, callback) {
  const fileExtension = filepath.substring(filepath.lastIndexOf('.'))
  if (fileExtension !== '.json' ) {
    return
  }
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err
    // console.log(data)
    callback(data)
  })

}

// CSV File => String
export function readCSVFile(filepath, callback) {
  // Höndla það ef fæll er ekki csv
  // console.log(filepath.lastIndexOf('.'))

  const fileExtension = filepath.substring(filepath.lastIndexOf('.'))
  if (fileExtension !== '.csv' ) {
    return
  }
  fs.readFile(filepath, 'latin1', (err, data) => {
    if (err) throw err
    // console.log(data)
    callback(data)
  })
}

export function readDirectory(filepath, callback) {
  fs.readdir(filepath, (err, files) => {
    if (err) throw err

    callback(files)
  })

}

//readCSVFile('../data/tomt.csv')

readJSONFile('../data/index.json', (json => {
  const obj = JSON.parse(json)
  console.log(obj)
}))