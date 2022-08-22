
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
        alert("You Inserted Maximum 5 Item List");
    }
    //console.log(parseInt(liNodes.length));
}

//Delegate Event Bubble
document.getElementById('eventBubbleClick').addEventListener('click', function (event) {

    const target = event.target;

    if (target.id === 'btnLionelMessi') {
        getListItem('lionelMessiText');
        document.getElementById('btnLionelMessi').disabled = 'true';
    }
    else if (target.id === 'btnNeymar') {
        getListItem('neymarText');
        document.getElementById('btnNeymar').disabled = 'true';
    }
    else if (target.id === 'btnAlison') {
        getListItem('alissonText');
        document.getElementById('btnAlison').disabled = 'true';
    }
    else if (target.id === 'btnMarcelo') {
        getListItem('marceloText');
        document.getElementById('btnMarcelo').disabled = 'true';
    }
    else if (target.id === 'btnRonaldo') {
        getListItem('ronaldoText');
        document.getElementById('btnRonaldo').disabled = 'true';
    }
    else if (target.id === 'btnMbappe') {
        getListItem('mBappeText');
        document.getElementById('btnMbappe').disabled = 'true';
    }

})




