// Classes
function Player(name, is_spy) {
    this.name = name;
    this.is_spy = is_spy;
    this.verif = this.name + " : " + this.is_spy;
}

// Functions
function random_list_number(list) {
    return Math.floor(Math.random() * list.length);
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
        "id": 1,
        "name": "Debbie",
        "is_spy": false
    },
    {
        "id": 2,
        "name": "John",
        "is_spy": false
    },
    {
        "id": 3,
        "name": "Klyde",
        "is_spy": false
    },
]

// Routine
let players_names = ["Joueur 1", "Joueur 2", "Joueur 3"];
let locations = ["New-York", "The Moon", "A bus for Elders"];

let spy_number = random_list_number(players_names);
console.log(spy_number);

let current_location = locations[random_list_number(locations)];
console.log(current_location);


function startNewGame() {
    spy_id = Math.floor(Math.random() * players.length) + 1;
    place_id = Math.floor(Math.random() * places.length);
    console.log("spy : " + spy_id + ", place : " + places[place_id].name);
    players.forEach(player => {
        player.is_spy = false;
        if (player.id == spy_id) {
            player.is_spy = true;
        }
    });

}

const debug_location = document.querySelector(".debug-location");
debug_location.textContent = current_location;

const debug_spy = document.querySelector(".debug-spy");
debug_spy.textContent = players_names[spy_number];

function addNewPlayer(s) {
    console.log(s);
}

function deletePlayer(s) {
    console.log(s);
}

playersListDisplay()

function playersListDisplay() {
    console.log("BEFORE : playersListDisplay document.readyState : " + document.readyState);

    var players_list = document.querySelector('#players-list');

    let players_list_lines = document.querySelectorAll('.player_list_line');

    console.log("GNAAAAAAAAAAAAAAA");
    console.log(players_list_lines);

    players_list_lines.forEach(player => {
        console.log("playersListDisplay : remove line");
        player.remove();
    })


    players.forEach(player => {
        const player_list_body = document.createElement("div");
        player_list_body.className = "player_list_line"
        player_list_body.id = 'player-' + player.id + '-body'
        // order.appendChild(document.createTextNode(player.id));
        players_list.appendChild(player_list_body);

        const order = document.createElement("div");
        order.appendChild(document.createTextNode(player.id));
        player_list_body.appendChild(order);

        var player_name = document.createElement("div");
        player_name.appendChild(document.createTextNode(player.name));
        player_list_body.appendChild(player_name);

        const list_action = document.createElement("div");
        const delete_button = document.createElement("button");
        delete_button.id = "player-" + player.id + "-delete-button";
        delete_button.type = "button";
        delete_button.innerHTML = "Delete";
        delete_button.value = player.id;
        delete_button.onclick = () => deletePlayer(player.id);
        list_action.appendChild(delete_button);

        player_list_body.appendChild(list_action);

        // const delete_button_event = document.getElementById('player-' + player.id + '-delete-button')
        // delete_button_event.addEventListener('click', () => {
    })

}

// function playersListDisplay() {
//     console.log("BEFORE : playersListDisplay document.readyState : " + document.readyState);
//     document.addEventListener("readystatechange", function (evt) {
//         if (document.readyState == "complete") {
//             console.log("AFTER : playersListDisplay document.readyState : " + document.readyState);
//             var players_list = document.querySelector('#players-list');

//             let players_list_lines = document.querySelectorAll('.player_list_line');

//             console.log("GNAAAAAAAAAAAAAAA");
//             console.log(players_list_lines);

//             players_list_lines.forEach(player => {
//                 console.log("playersListDisplay : remove line");
//                 player.remove();
//             })


//             players.forEach(player => {
//                 const player_list_body = document.createElement("div");
//                 player_list_body.className = "player_list_line"
//                 player_list_body.id = 'player-' + player.id + '-body'
//                 // order.appendChild(document.createTextNode(player.id));
//                 players_list.appendChild(player_list_body);

//                 const order = document.createElement("div");
//                 order.appendChild(document.createTextNode(player.id));
//                 player_list_body.appendChild(order);

//                 var player_name = document.createElement("div");
//                 player_name.appendChild(document.createTextNode(player.name));
//                 player_list_body.appendChild(player_name);

//                 const list_action = document.createElement("div");
//                 const delete_button = document.createElement("button");
//                 delete_button.id = "player-" + player.id + "-delete-button";
//                 delete_button.type = "button";
//                 delete_button.innerHTML = "Delete";
//                 delete_button.value = player.id;
//                 delete_button.onclick = () => deletePlayer(player.id);
//                 list_action.appendChild(delete_button);

//                 player_list_body.appendChild(list_action);

//                 // const delete_button_event = document.getElementById('player-' + player.id + '-delete-button')
//                 // delete_button_event.addEventListener('click', () => {
//             })
//         }
//     })
// }

function deletePlayer(player_id) {
    console.log("deletePlayer");
    let index = players.findIndex(function (item) {
        return item.id === player_id
    })
    const player = players[index]
    if (confirm("Do you want to delete " + player.name + " ? (index : " + index + ")") == false) {
        return
    } else {
        players.pop(index)
        // document.getElementById('player-' + player.id + '-body').remove()
        playersListDisplay()
    }

}