import * as fs from 'fs';
import { buildHomePage, buildPage } from '../filebuilder/filebuilder.js';
import { getFileExtension } from '../lib/lib.js';

const DATAPATH = './src/data'

fs.readdir(DATAPATH, (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (getFileExtension(file) === '.csv') {
            buildPage(`${DATAPATH  }/${file}`)
        }
        else if (getFileExtension(file) === '.json') {
            buildHomePage(`${DATAPATH  }/${file}`)
        }
    });
})
