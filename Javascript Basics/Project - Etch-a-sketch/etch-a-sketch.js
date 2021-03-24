document.addEventListener('DOMContentLoaded', () => {   
    // First run, so every refresh of the window gives a 16x16 grid
    createGrid(16);
}) 

// Adding a div with id = "gridCell" and class = "grid" to the container 
let gridCell = document.createElement("div");
gridCell.classList.add("grid");
gridCell.id = "gridCell";
container.append(gridCell);

// Grabbing the reset button
const reset = document.querySelector(".reset");


// Function to fill the grid with divs
function createGrid(gridsize) {
    // Make the grid cells' size automatically adjust according 
    // to how many cells there are 
    gridCell.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    
    // Loop through and create a div for each cell
    for (i = 0; i < gridsize * gridsize; i++) {
        let div = document.createElement("div");
        div.classList.add("gridElement");
        gridCell.append(div);
    }
}

// Adding a trail effect when hovering over the cells
const cells = document.querySelector("#container");

cells.addEventListener("mouseover", (e) => {
    // Only change color on the div with class "gridElement"
    if (e.target.classList.value === "gridElement") {
        e.target.style.background = "black";
    }
});

// Reset the page and asks for new grid size
reset.addEventListener("click", (e) => {
    console.log("Resetting the page");
    
    while (true) {
        let newGrid = prompt("Enter a grid size (100 max)")
        if (newGrid <= 100 && newGrid > 1) {
            // Clear the page of "old" divs
            gridCell.textContent = "";
            
            // Greate a new grid
            createGrid(newGrid);
            break;
        }
    }
})