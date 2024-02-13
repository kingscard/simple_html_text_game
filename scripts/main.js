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
    document.addEventListener("readystatechange", function (evt) {
        if (document.readyState == "interactive") {
            var players_list = document.querySelector('#players-list .test');
            console.log('playersListDisplay')

            players.forEach(player => {
                var player_list_body = document.createElement("div");
                player_list_body.className = "body"
                player_list_body.id = 'player-' + player.id + '-body'
                // order.appendChild(document.createTextNode(player.id));
                players_list.appendChild(player_list_body);

                var order = document.createElement("div");
                order.appendChild(document.createTextNode(player.id));
                player_list_body.appendChild(order);

                var player_name = document.createElement("div");
                player_name.appendChild(document.createTextNode(player.name));
                player_list_body.appendChild(player_name);

                var list_action = document.createElement("div");
                list_action.innerHTML = '<input id="player-' + player.id + '-delete-button" type="submit" name="edit" value="Delete">';
                player_list_body.appendChild(list_action);

                const delete_button = document.getElementById('player-' + player.id + '-delete-button')
                delete_button.addEventListener('click', () => {
                    let index = players.findIndex(function (item) {
                        return item.id === player.id
                    })
                    if (confirm("Do you want to delete " + player.name + " ? (index : " + index + ")") == false) {
                        return
                    } else {
                        // players.splice(0, index)
                        delete players[index]
                        document.getElementById(player_list_body.id).remove()
                        playersListDisplay()
                    }
                })
            })
        }
    })
}