const container = document.querySelector('#container');
const rowsTotal = 16;
const columnsTotal = rowsTotal;
const reset = document.querySelector("#reset");
reset.addEventListener('click', () => location.reload());

for(let row = 1; row <= rowsTotal ; row++) {
    let gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    for(let column = 1; column <= columnsTotal ; column++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        gridRow.append(cell);
    }
    container.append(gridRow);
}

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.style.backgroundColor = "black";
    console.log(target);
})