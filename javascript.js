const container = document.querySelector('#container');
let cellSize = '40px';
let rowsTotal = 16;
let columnsTotal = rowsTotal;
makeGrid();

const cellsPerRow = document.querySelector("#cellsPerRow");
cellsPerRow.addEventListener('click', () => {
    rowsTotal = parseInt(prompt("Enter cells per row(max 100): ", 16));
    if(rowsTotal <= 100){
        columnsTotal = rowsTotal;
        container.innerHTML = '';
        cellSize = `${640/rowsTotal}px`;
        makeGrid();
    } else {
        alert("Enter number upto 100");
    }
});

const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});

function makeGrid() {
    for(let row = 1; row <= rowsTotal ; row++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        for(let column = 1; column <= columnsTotal ; column++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('style', `width: ${cellSize}; height: ${cellSize};`);
            gridRow.append(cell);
        }
        container.append(gridRow);
    }
    container.addEventListener("mouseover", (event) => {
        let target = event.target;
        target.style.backgroundColor = "black";
    });
}