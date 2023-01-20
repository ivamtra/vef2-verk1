/* eslint-disable no-plusplus */

function isSorted(objArr) {
    // key er strengur
    for (let i = 0; i < objArr.length-1; i++) {
        if (objArr[i].key.localeCompare(objArr[i+1].key) > 0) {
            return false
        }
    }
    return true
}

// (Raðir í töflu, dálkur sem við viljum raða)
// eslint-disable-next-line no-unused-vars
function sort(index) {
    const tbody = document.querySelector('tbody')

    const tRows = document.querySelectorAll('tbody tr')
    const objectList = []
    tRows.forEach(row => {
        const key = row.children[index].innerHTML
 
        const obj = {row, key}
        objectList.push(obj)
    })

    if (!isSorted(objectList)) {
        objectList.sort((a, b) => a.key.localeCompare(b.key))
    }
    else {
    
        objectList.sort((b, a) => a.key.localeCompare(b.key))
    }

    objectList.map( x => x.row).forEach(el => tbody.appendChild(el))
}

