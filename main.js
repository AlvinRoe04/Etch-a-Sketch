const title = document.querySelector('h1');
const reset = document.querySelector('.reset');
const container = document.querySelector('.container'); //The parent of the container of the grid. It is a column of rows, which are filled with the divs that form the grid.

let size;
let last = container; 

reset.addEventListener('click', e => onResetPressed(e));



function onMouseOver(mouseOverEvent) {
    console.log(mouseOverEvent.srcElement);
    mouseOverEvent.srcElement.classList.add('drawn');
}

function onResetPressed(resetPressedEvent){
    let cullList = [];
    for(const child of container.children){
        cullList.push(child);
    }
    for(let i = cullList.length - 1; i >= 0; i--){
        container.removeChild(cullList[i]);
    }
    size = promptForSize(10, 100);
    generateEtchASketch();
}

function promptForSize(minSize, maxSize){
    return Math.max(Math.min(prompt('Enter a number between 10 and 100'), maxSize), minSize);
}

function generateEtchASketch() {
    //Creating a Grid from Divs. Each individual square is called a "cell". They fill rows. The rows are all contained in one container which is a flex container set to column.
    for(let i = 0; i < size; i++)
    {
        const row = document.createElement('div');
        row.classList += 'row';

        for(let i = 0; i < size; i++)
        {
            const cell = document.createElement('div');
            cell.classList += 'cell';
            cell.addEventListener('mouseover', e => onMouseOver(e));
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}



