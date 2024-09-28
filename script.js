const container = document.querySelector("#container");
const buttonChangeSize = document.querySelector("#changeSize")

let gridSize = 16;

buttonChangeSize.addEventListener("click", () => {
let size = prompt("Pick the size of the grid from 1 to 100")

if(size < 100){
createGrid(size)
}
else{
   alert("Please pick a number below 100")
}
})

createGrid(gridSize)
function createGrid(size){
   container.innerHTML = ""
   let flexBasisSize = 100 / size;

   //loops to create the grid size
for(let i = 0; (size * size) > i; i++){
   let items = document.createElement("div")
   container.appendChild(items)
   items.style.flex = `1 1 ${flexBasisSize + "%"}`
   items.style.aspectRatio = "1/1"

   items.addEventListener("mouseover", () => {
      console.log("hover")

      //picks a random rgb color
      items.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
   })
}
}