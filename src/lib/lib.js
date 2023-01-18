
// file.ext => .ext
export function getFileExtension(str) {
    return str.substring(str.lastIndexOf('.'))
}

export function deleteRow(arr, row) {
    const copy = [...arr]; // make copy
    copy.splice(row, 1);
    return copy;
 }

// file.ext => file
export function getFileName(str) {
    return str.substring(0, str.lastIndexOf('.'))
}

