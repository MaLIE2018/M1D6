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

const randomColor = () => {
        let red = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        return `rgb(${red},${green},${blue})`
    }
    //Exercise 7

const h1change = () => {
    let h1 = document.getElementById("title")
    h1.innerHTML = "I was the Shop title before"

}

h1change()

//Exercise 8

const pageBackground = () => {
    let body = document.querySelector("body")
    body.style.backgroundColor = randomColor()
}




const myStopFunction = () => {
    clearInterval(p);
}

//Exercise 9

const changeAddress = (params) => {
    let footer = document.querySelector("footer div")
    if (footer.getElementsByTagName("p")[1].innerHTML == "Frankfurter Strasse 13, 12047 Berlin") {
        footer.getElementsByTagName("p")[1].innerHTML = "Sorry, I'm a fake address"
    } else {
        footer.getElementsByTagName("p")[1].innerHTML = "Frankfurter Strasse 13, 12047 Berlin"
    }
}

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

}
addClassForImages()

const visibilityImgs = () => {
    let imgClass = document.getElementsByClassName("img-class")
    for (const item of imgClass) {
        if (item.style.visibility === "visible" || item.style.visibility === "") {
            item.style.visibility = "hidden"
        } else {
            item.style.visibility = "visible"
        }

    }
}


//Exercise 12
/* EX12: Write a function to color the price of each product in a different one
    every time it's invoked */



const changeColorofPrice = () => {
    let tableRows = document.getElementsByTagName("tr")
    for (let i = 1; i < tableRows.length; i++) {
        tableRows[i].childNodes[3].style.color = randomColor()
    }
}



//Testing
// appendChild
const createNode = (params) => {
    let node = document.createElement("p")
    let textnode = document.createTextNode("I'm a new node of div{1}")
    node.appendChild(textnode)
    document.getElementsByTagName("div")[1].appendChild(node)
}

createNode()

//children
// console.log('document.getElementsByTagName("div")[1].children:', document.getElementsByTagName("div")[1].children)


// toggle class
for (const item of document.querySelectorAll("p")) {
    item.classList.toggle("p-class")
}

//parentNode
console.log('document.getElementById("address").parentNode():', document.getElementById("address").parentNode)
    //document.getElementsByTagName("div")[1].children


document