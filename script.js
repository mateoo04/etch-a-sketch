const body = document.querySelector("body")
body.style.backgroundColor = "#fff"

const container = document.querySelector(".container")
container.style.width = "100%"

const button = document.querySelector(".button")
button.textContent = "Make a custom grid"

button.addEventListener("click", () => {
    let n = prompt("Enter number of squares per side of the new grid:")
    if (n > 100) n = 100
    createGrid(n)
})

function randomNumber() {
    let num = Math.random() * 255
    return num
}

function createGrid(n) {
    container.innerHTML = ''

    for (let i = 0; i < n; i++) {
        const row = document.createElement("div")
        for (let j = 0; j < n; j++) {
            const div = document.createElement("div")
            div.classList.add("item")

            div.style.flexGrow = 1
            div.style.aspectRatio = "1 / 1"
            div.style.boxSizing = "border-box"
            row.appendChild(div)
        }
        row.setAttribute("class", "row")
        container.appendChild(row)
        row.style.display = "flex"
        row.style.flexDirection = "row"
        row.style.width = "100%"

        container.style.flexDirection = "column"
    }

    let num = 0;

    document.querySelectorAll(".item").forEach((item) => {
        item.style.opacity = 1
        item.addEventListener("mouseover", () => {
            console.log(`here ${++num}`)
            item.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
            item.style.opacity -= 0.1
        })
    })
}

createGrid(16)