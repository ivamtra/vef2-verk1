
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


export function csvToArray(csv) {
    const rows = csv.split('\n')
    let arr = rows.map((row) => row.split(';'))
  
    // Athuga ef raðir eru löglegar
    // Þ.e. hafa 6 dálka
    const rowsToDelete = []
    arr.forEach((row,index) => {
      if (row.length !== 6) {
        rowsToDelete.push(index)
      }
    })
    
    // Eyða þeim ef þær passa ekki
    while (rowsToDelete.length > 0) {
      arr = deleteRow(arr, rowsToDelete.pop())
    }
  
    return arr
  }

 export function arrayToJson(arr) {
    const obj = arr.map(item => ({
            numer: item[0],
            heiti: item[1],
            einingar: Number(item[2]),
            misseri: item[3],
            namstig: item[4],
            hlekkur: item[5]
    }))
    return obj
 } 

 export function handleNumber(str) {
  // Íslensk tala

  // Losna við alla enska kommustafi
  if (Number(str) % 1 !== 0 && !Number.isNaN(Number(str))) {
    return ''
  }

  return str
 }

 export function handleMisseri(str) {

  if (!(str === 'Vor' || str === 'Haust' || str === 'Sumar')) {
    return ''
  }
  return str
 }


 export function validURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

 export function handleURL(string) {
  if (validURL(string))
    return string
  return ''  
}


export function getPageName(str) {
  const name = str.substring(str.lastIndexOf('/')+1, str.lastIndexOf('.'))

  return name.replace(name[0], name[0].toUpperCase())

}
