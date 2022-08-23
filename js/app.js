
// Get Top Player Name to Insert in List Item
function getListItem(playerName) {

    const playerNameText = document.getElementById(playerName).innerText;
    const fivePlayerName = document.createTextNode(playerNameText);

    const li = document.createElement('li');
    const ul = document.getElementById("selected-player-list");
    const liNodes = [];

    for (var i = 0; i < ul.childNodes.length; i++) {
        if (ul.childNodes[i].nodeName == "LI") {
            liNodes.push(ul.childNodes[i]);
        }
    }
    li.appendChild(fivePlayerName);

    if (parseInt(liNodes.length) < 5) {
        document.getElementById('selected-player-list').appendChild(li);
    }
    else if (parseInt(liNodes.length) >= 5) {
        alert("You Can Add up to Maximum 5 Players in Item List");
    }
}

//Delegate Event Bubble
document.getElementById('eventBubbleClick').addEventListener('click', function (event) {

    const target = event.target;

    if (target.id === 'btnLionelMessi') {
        getListItem('lionelMessiText');
        getMakeEmptyField();
        document.getElementById('btnLionelMessi').setAttribute('disabled', true);
    }
    else if (target.id === 'btnNeymar') {
        getListItem('neymarText');
        document.getElementById('btnNeymar').setAttribute('disabled', true);
        getMakeEmptyField();
    }
    else if (target.id === 'btnAlison') {
        getListItem('alissonText');
        document.getElementById('btnAlison').setAttribute('disabled', true);
        getMakeEmptyField();
    }
    else if (target.id === 'btnMarcelo') {
        getListItem('marceloText');
        document.getElementById('btnMarcelo').setAttribute('disabled', true);
        getMakeEmptyField();
    }
    else if (target.id === 'btnRonaldo') {
        getListItem('ronaldoText');
        document.getElementById('btnRonaldo').setAttribute('disabled', true);
        getMakeEmptyField();
    }
    else if (target.id === 'btnMbappe') {
        getListItem('mBappeText');
        document.getElementById('btnMbappe').setAttribute('disabled', true);
        getMakeEmptyField();
    }

})

//Calculate Button Calculation Clicking Event

document.getElementById('btnCalculate').addEventListener('click', function () {

    const perPlayerField = document.getElementById('perPlayerField');
    const inputPerPlayerField = parseFloat(perPlayerField.value);

    const playerExpensesField = document.getElementById('playerExpensesField');

    const ul = document.getElementById("selected-player-list");
    const liNodes = [];

    for (var i = 0; i < ul.childNodes.length; i++) {
        if (ul.childNodes[i].nodeName == "LI") {
            liNodes.push(ul.childNodes[i]);
        }
    }
    const howManyPlayer = parseInt(liNodes.length);

    if (isNaN(inputPerPlayerField)) {
        alert("Please provide a Valid Input");
        perPlayerField.value = '';
    }
    else if (howManyPlayer < 0) {
        alert('Please Select Player First');
        perPlayerField.value = '';
    }
    else {
        const totalExpenseForPlayer = inputPerPlayerField * howManyPlayer;
        playerExpensesField.innerText = totalExpenseForPlayer;
    }
})

//Calculate Total Button Calculation Clicking Event
document.getElementById('btnCalculateTotal').addEventListener('click', function () {
    const playerExpenses = parseFloat(document.getElementById('playerExpensesField').innerText);
    const managerExpenses = parseFloat(document.getElementById('managerField').value);
    const coachExpenses = parseFloat(document.getElementById('coachField').value);
    const totalExpensesField = document.getElementById('totalExpensesField');

    if (isNaN(managerExpenses) || isNaN(coachExpenses)) {
        alert("Please provide a Valid Input");
        perPlayerField.value = '';
    }
    else if (managerExpenses < 0 || coachExpenses < 0) {
        alert("Please provide a Positive Input");
        perPlayerField.value = '';
    }
    else {
        const totalExpenses = parseFloat(playerExpenses) + parseFloat(managerExpenses) + parseFloat(coachExpenses);
        totalExpensesField.innerText = totalExpenses;
    }
})

//Get Budget Section All Fill Blanked
function getMakeEmptyField() {
    perPlayerField.value = '';
    document.getElementById('playerExpensesField').innerText = '';
    document.getElementById('managerField').value = '';
    document.getElementById('coachField').value = '';
    document.getElementById('totalExpensesField').innerText = '';
}




