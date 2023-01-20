import * as fs from 'fs';
import { buildHomePage, buildPage } from '../filebuilder/filebuilder.js';
import { getFileExtension } from '../lib/lib.js';

const PATH = '../data'


fs.readdir(PATH, (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (getFileExtension(file) === '.csv') {
            console.log(file)
            buildPage(`${PATH  }/${file}`)
        }
        else if (getFileExtension(file) === '.json') {
            buildHomePage(`${PATH  }/${file}`)
        }
    });

})

