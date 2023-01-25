
// Losnar við alla ólöglega hlekki í client side


const divs = document.querySelectorAll('div')
const links = document.querySelectorAll('a')

function UrlExists(url) {
    const http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404
}

const invalidIndices = []
links.forEach((link, index) => {
    if (!UrlExists(link.href))
        invalidIndices.push(index)
})

while (invalidIndices.length > 0) {
    const curIndex = invalidIndices.pop()
    divs[curIndex].remove()
}