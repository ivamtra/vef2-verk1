import { buildHomePage2, buildPage2 } from '../filebuilder/filebuilder.js';
import { readDirectory } from '../filereader/filereader.js';
import { getFileExtension } from '../lib/lib.js';

const PATH = '../data'
readDirectory(PATH, files => {
    files.forEach(file => {
        if (getFileExtension(file) === '.csv') {
            buildPage2(`${PATH  }/${file}`)
        }
        else if (getFileExtension(file) === '.json') {
            buildHomePage2(`${PATH  }/${file}`)
        }
    });
})


