const cards = document.getElementById('cards');
const inputName = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');
const btn = document.getElementById('main-button');
const mainTable = document.getElementById('main-table');

btn.addEventListener('click', e => {
    e.preventDefault();

    let createTr = document.createElement('tr');
    createTr.classList.add('table-row-header');
    mainTable.append(createTr);

    const typeTD = document.createElement('td');
    const inputNameTD = document.createElement('td');
    const dateTD = document.createElement('td');
    const amountTD = document.createElement('td');

    typeTD.textContent = cards.value;
    inputNameTD.textContent = inputName.value;
    dateTD.textContent = date.value;
    amountTD.textContent = '$' + amount.value;



});