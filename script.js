
let images = [
    {'id': '1', 'url':'./img/mayo1.jpg'},
    {'id': '2', 'url':'./img/mayo2.jpeg'},
    {'id': '3', 'url':'./img/mayo3.jpeg'},
    {'id': '4', 'url':'./img/mayo4.webp'},
    {'id': '5', 'url':'./img/mayo5.jpg'},
    {'id': '6', 'url':'./img/mayo6.webp'},

]
/* adicionando elemento do container */
let container = document.querySelector('#citems')
/* para cada imagem do array, adicionala na tela em uma div */
let loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages (images, container)
/* pegando a div que criamos acima */
let items = document.querySelectorAll('.item ')

let next = () => {
    container.appendChild(items[0])
    items = document.querySelectorAll('.item ')
}
let previous = () => {
    let lastItem = items[items.length-1]
    container.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item ')
}



document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)