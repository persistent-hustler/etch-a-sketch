const container = document.querySelector('#container');
const rowsTotal = 16;
const columnsTotal = rowsTotal;

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


