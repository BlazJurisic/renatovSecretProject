const actions = [
    {
        name: "Inventura",
        image: "assets/img/News.svg"
    },
    {
        name: "Inventar",
        image: "assets/img/OK.svg"
    },
    {
        name: "Prostorije",
        image: "assets/img/OK.svg"
    },
    {
        name: "Zaposlenici",
        image: "assets/img/OK.svg"
    },
    {
        name: "Administracija",
        image: "assets/img/Services.svg"
    },

]

const domElems = {
    ul: "ul",
    li: "li",
    a: "a",
    img: "img",
    href: "href",
    src: "src",
    width: "width",
    height: "height"
}

actions.map(item => {
    const list = document.createElement(domElems.ul)
    const listItem = document.createElement(domElems.li)

    const a = document.createElement(domElems.a)
    a.setAttribute(domElems.href, "#")

    const image = document.createElement(domElems.img)
    image.setAttribute(domElems.src, item.image)
    image.setAttribute(domElems.width, "20")
    image.setAttribute(domElems.height, "20")

    const text = document.createTextNode(item.name)

    listItem.appendChild(a)
    a.appendChild(image)
    a.appendChild(text)
    list.appendChild(listItem)

    const col1 = document.getElementById('col1')
    col1.appendChild(list)
})
