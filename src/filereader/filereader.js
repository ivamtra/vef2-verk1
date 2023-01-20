import * as fs from 'fs';

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
  const fileExtension = filepath.substring(filepath.lastIndexOf('.'))
  if (fileExtension !== '.csv' ) {
    return
  }
  
  fs.readFile(filepath, 'latin1', (err, data) => {
    if (err) throw err
    callback(data)
  })
}

export function readDirectory(filepath, callback) {
  fs.readdir(filepath, (err, files) => {
    if (err) throw err

    callback(files)
  })

}

