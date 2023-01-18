// const fs = require('fs')
import * as fs from 'fs';

export function csvToArray(csv) {
  const rows = csv.split('\n');
  return rows.map((row) => row.split(';'));
}

export function readCSVFile(filepath, callback) {
  fs.readFile(filepath, 'latin1', (err, data) => {
    if (err) throw err;

    // console.log(data)
    callback(data);
  });
}

// readCSVFile('../data/hagfraedi.csv', x => console.log(x))

// fs.readFile('../data/hagfraedi.csv', 'latin1', (err, data) => {
//     if (err) throw err

//     // eslint-disable-next-line no-plusplus
//     const arr = csvToArray(data)
//     console.log(arr)
// })
