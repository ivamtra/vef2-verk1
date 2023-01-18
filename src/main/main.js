import { buildHomePage, buildHTMLPage } from '../filebuilder/filebuilder.js';
import { readDirectory } from '../filereader/filereader.js';
import { getFileExtension } from '../lib/lib.js';

export function main() {
    const PATH = '../data'
    readDirectory(PATH, files => {
        files.forEach(file => {
            if (getFileExtension(file) === '.csv') {
               buildHTMLPage(`${PATH  }/${file}`)
            }
            else if (getFileExtension(file) === '.json') {
                buildHomePage(`${PATH  }/${file}`)
            }
        });
    })

}


main()