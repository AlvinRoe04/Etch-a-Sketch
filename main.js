const title = document.querySelector('h1');
const container = document.querySelector('.container');

let size = prompt('Enter a number up to 100');
let last = container; 
//Create a flex div row for each row
for(let i = 0; i < size; i++)
{
    const row = document.createElement('div');
    row.classList += 'row';

    for(let i = 0; i < size; i++)
    {
        const cell = document.createElement('div');
        cell.classList += 'cell';
        row.appendChild(cell);
    }

    container.appendChild(row);
}

