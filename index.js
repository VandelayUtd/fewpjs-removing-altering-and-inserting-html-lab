// Write your code here!

// let element = document.createElement('div')

const main = document.querySelector("main")

main.remove()

let newHeader = document.createElement("h1")



document.body.appendChild(newHeader)

newHeader.id = "victory"
newHeader.class = "victory"

newHeader.innerHTML = "YOUR-NAME is the champion"

