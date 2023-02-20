const buttonEl = document.querySelector('button');
const tableEl = document.createElement('table');
const wrapper = document.querySelector('.wrapper');

let isTableVisible = false;

function createTable(e) {
    e.preventDefault();
    wrapper.appendChild(tableEl);
    if(isTableVisible) {
        tableEl.innerHTML = '';
        isTableVisible = false;
    } else {
        for (let i = 0; i < 10; i++) {
            let trEl = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                let tdEl = document.createElement('td');
                const textNumber = document.createTextNode((10 * i + j) + 1);
                tdEl.appendChild(textNumber);
                trEl.appendChild(tdEl);
            };
            tableEl.appendChild(trEl);
        }
        isTableVisible = true;
    }
}

buttonEl.addEventListener('click',createTable);