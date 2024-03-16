// Classes
function Player(name, is_spy) {
    this.name = name;
    this.is_spy = is_spy;
    this.verif = this.name + " : " + this.is_spy;
}

// Functions
function random_list_number(list) {
    const index_random = Math.floor(Math.random() * list.length);
    // console.log(index_random);
    return index_random;
}

// Objects

var places = [
    {
        "name": "The Catacombs of Paris",
        "description": "An underground ossuary in Paris, France, which holds the remains of more than six million people."
    },
    {
        "name": "The Door to Hell",
        "description": "A natural gas field in Derweze, Turkmenistan, which has been burning continuously since 1971."
    },
    {
        "name": "The Island of the Dolls",
        "description": "A small island in Xochimilco, Mexico, which is home to hundreds of dolls hanging from trees and buildings."
    },
    {
        "name": "Airplane",
        "description": "A vehicle designed for air travel that is powered by jet engines or propellers."
    },
    {
        "name": "Mountain",
        "description": "A large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill."
    },
    {
        "name": "Bus",
        "description": "A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."
    },
    {
        "name": "Grandma's place",
        "description": "A place where your grandmother lives."
    },
]

var players = [
    {
        "name": "Debbie",
        "is_spy": false
    },
    {
        "name": "John",
        "is_spy": false
    },
    {
        "name": "Klyde",
        "is_spy": false
    },
]

// Routine

var game_spy_name = "";
var game_place_name = "";

function startNewGame() {
    console.log("startNewGame");

    const spy_index = random_list_number(players);

    players.forEach(player => {
        player.is_spy = false;
    })
    players[spy_index].is_spy = true;
    game_spy_name = players[spy_index].name;


    const place_index = random_list_number(places);
    game_place_name = places[place_index].name;

    console.log("spy (" + spy_index + ") : " + game_spy_name + ", place (" + place_index + "): " + game_place_name);

    const box = document.querySelector('#players');

    // 👇️ removes element from DOM
    box.style.visibility = 'hidden';
}


const new_game_button = document.querySelector("#new-game-button")

new_game_button.onclick = () => {
    if (players.length >= 2) {
        startNewGame();
    }
}

const debug_location = document.querySelector(".debug-location");
debug_location.textContent = game_place_name;

const debug_spy = document.querySelector(".debug-spy");
debug_spy.textContent = game_spy_name;

const player_new_button = document.querySelector("#new-player-button");
player_new_button.setAttribute("disabled", "");

const player_new_name = document.querySelector("#new-player-name");
player_new_name.addEventListener("keyup", (event) => {
    if (player_new_name.value == "") {
        player_new_button.setAttribute("disabled", "");
        return;
    }
    player_new_button.removeAttribute("disabled");
})

player_new_button.onclick = () => {
    if (player_new_name.value == "") {
        return;
    }
    players.push({
        "name": player_new_name.value,
        "is_spy": false
    });
    playersListDisplay();
    player_new_name.value = "";
    player_new_button.setAttribute("disabled", "");
}

playersListDisplay()

function playersListDisplay() {
    console.log("playersListDisplay document.readyState : " + document.readyState);

    var players_list = document.querySelector('#players-list');

    let players_list_lines = document.querySelectorAll('.player_list_line');

    // Clearing of all elements
    players_list_lines.forEach(player => {
        player.remove();
    })

    players.forEach(player => {
        const player_list_body = document.createElement("div");
        player_list_body.className = "player_list_line"
        player_list_body.id = 'player-' + player.id + '-body'
        players_list.appendChild(player_list_body);

        const player_index = players.indexOf(player) + 1

        const order = document.createElement("div");
        order.appendChild(document.createTextNode(player_index));
        player_list_body.appendChild(order);

        var player_name = document.createElement("div");
        player_name.appendChild(document.createTextNode(player.name));
        player_list_body.appendChild(player_name);

        // Control buttons on the right
        const list_action = document.createElement("div");

        const up_button = document.createElement("button");
        up_button.type = "button";
        up_button.innerHTML = "Up";
        // up_button.value = player.id;
        up_button.onclick = () => movePlayer(player_index - 1, "up");
        list_action.appendChild(up_button);

        up_button.setAttribute("disabled", "");
        if (player_index - 1 > 0) {
            up_button.removeAttribute("disabled");
        }

        const down_button = document.createElement("button");
        down_button.type = "Down";
        down_button.innerHTML = "Down";
        // down_button.value = player.id;
        down_button.onclick = () => movePlayer(player_index - 1);
        list_action.appendChild(down_button);

        down_button.setAttribute("disabled", "");
        if (player_index < players.length) {
            down_button.removeAttribute("disabled");
        }

        const delete_button = document.createElement("button");
        delete_button.type = "button";
        delete_button.innerHTML = "Delete";
        // delete_button.value = player.id;
        delete_button.onclick = () => deletePlayer(player_index - 1);
        list_action.appendChild(delete_button);

        player_list_body.appendChild(list_action);

    })
}

// Functions for array management
function array_move(arr, old_index, new_index) {
    console.log("array_move");
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
}

function movePlayer(player_index, direction = "") {
    console.log("movePlayer");
    if (direction == "up") {
        array_move(players, player_index, player_index - 1);
    } else {
        array_move(players, player_index, player_index + 1);
    }
    playersListDisplay();
}

function deletePlayer(player_index) {
    console.log("deletePlayer");

    const player = players[player_index];

    if (confirm("Do you want to delete " + player.name + " ? (index : " + player_index + ")") == false) {
        return;
    }

    players.pop(index);
    playersListDisplay();
}