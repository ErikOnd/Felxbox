let containerNode = document.getElementsByClassName('container')[0]

let num = 1
let counter = 1;
while (num <= 12) {
    let divContainer = document.createElement('div')
    divContainer.classList.add('divContainer')
    containerNode.appendChild(divContainer)

    for (let index = num; index > 0; index--) {
        let divNode = document.createElement('div')
        divNode.classList.add('divStyle')
        let height = 95 / counter;
        height = height + '%'
        divNode.style.height = height;
        divContainer.appendChild(divNode)
    }
    num++
    counter++;
}






