let containerNode = document.getElementsByClassName('container')[0]





function createDivs(amount) {
    let num = 1
    let counter = 1;
    while (num <= amount) {
        let divContainer = document.createElement('div')
        divContainer.classList.add('divContainer')
        containerNode.appendChild(divContainer)

        for (let index = num; index > 0; index--) {
            let divNode = document.createElement('div')
            //divNode.style.width = 'auto'
            divNode.classList.add('divStyle')
            let height = 100 / counter;
            height = height + '%'
            divNode.style.height = height;
            divContainer.appendChild(divNode)
        }
        num++
        counter++;
    }
}


createDivs(12)






