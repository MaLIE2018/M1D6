//object
const product = {
    name: "A",
    image: "https://picsum.photos/5",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem impedit iusto tempore voluptatem iure aut',
    price: 100,
    link: "https://www.amazon.de/smartphone-display-portrait-fingerprint-Assistant/dp/B08J44ZY3D/ref=sr_1_1_sspa?dchild=1&keywords=smartphone&qid=1615813430&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMFIyN09KNkxGUkVIJmVuY3J5cHRlZElkPUEwMzkwMzEzMkVMWlpQVE1VNTkyWCZlbmNyeXB0ZWRBZElkPUEwMzg0NDc4U1A4Q0NJWFBETVA5JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
}

const createTable = (obj) => {
    let htmlString = ""
    let theader = "<tr><th>Name</th><th>Image</th><th>Description</th><th>Price</th></tr>"
    let row = ""
    for (const item of obj) {
        htmlString = htmlString + `<tr><td><a href="${item.link}">${item.name}</a></td><td><img src='${item.image}' alt='productImage'></td><td>${item.description}</td><td>${item.price}</td></tr>`
    }
    document.getElementById("products").innerHTML = theader + htmlString
}

const createSamples = () => {
    let products = []
    for (let i = 0; i < 5; i++) {
        products[i] = Object.assign({}, product)
        products[i].name = `A ${i+1}`
        products[i].image = products[i].image + i
        products[i].price = products[i].price + "$"
    }
    return createTable(products)
}

createSamples()


//Exercise 7

const h1change = () => {
    let h1 = document.getElementById("title")
    h1.innerHTML = "I was the Shop title before"

}

h1change()

//Exercise 8

const pageBackground = () => {
    let body = document.querySelector("body")
    body.style.backgroundColor = "#f2f2f2"
}

pageBackground()

//Exercise 9

const changeAddress = (params) => {
    let footer = document.querySelector("footer div")
    footer.getElementsByTagName("p")[1].innerHTML = "Sorry, I'm a fake address"
}

changeAddress()

//Exercise 10

const addClassForLinks = () => {
    let link = document.getElementsByTagName("a")

    for (const linker of link) {
        linker.classList.toggle("link-class")
    }

}

addClassForLinks()

//Exercise 11

const addClassForImages = () => {
    let images = document.getElementsByTagName("img")

    for (const item of images) {
        item.classList.toggle("img-class")
    }
    let imgClass = document.getElementsByClassName("img-class")

    for (const item of imgClass) {
        item.style.visibility = "visible"
    }
}
addClassForImages()

//Exercise 12
/* EX12: Write a function to color the price of each product in a different one
    every time it's invoked */

const randomColor = () => {
    let red = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

const changeColorofPrice = () => {
    let tableRows = document.getElementsByTagName("tr")
    for (let i = 1; i < tableRows.length; i++) {
        tableRows[i].childNodes[3].style.color = randomColor()
    }
}

changeColorofPrice()