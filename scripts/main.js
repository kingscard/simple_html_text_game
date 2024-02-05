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

const team_button = document.querySelector(".players-button");
team_button.addEventListener('click', displayTeam);

const start_button = document.querySelector(".start-button");
start_button.addEventListener('click', startNewGame);

// window.addEventListener("DOMContentLoaded", (event) => {
//     const player_new_button = document.querySelector(".player-new-button");
//     if (player_new_button) {
//         player_new_button.addEventListener('click', addNewPlayer);
//     }
// });

function addNewPlayer(s) {


    console.log(s);
}

const main_display = document.getElementById("main-display");
console.log(main_display.textContent)

function displayTeam() {
    let team_display = '<div id="main-player">';
    team_display += "<p class='title'>Players</p>";

    players.forEach(player => {
        team_display += '<div class="player">';
        team_display += '<p>' + player.id + '</p>';
        team_display += '<p>Name : ' + player.name + '</p>';
        team_display += '<input player_id="' + player.id + '" class="player-delete-button" type="button" value="Delete" />';
        team_display += '</div>';
    });
    team_display += '<div class="player-new">';
    team_display += '<p>New Player\'s name :</p>';
    team_display += '<input id="player-new-entry" type="entry" placeholder="New Member" value="gna"/>';
    team_display += '<input class="player-new-button" type="button" value="Add new Player" onclick="addNewPlayer();"/>';
    team_display += '</div> ';
    team_display += '</div> ';

    main_display.innerHTML = team_display;

    let player_new_entry = document.getElementById("player-new-entry");
    // player_new_entry.addEventListener("keypress", addNewPlayer());
    console.log(player_new_entry.value)

    const player_delete_button = document.querySelector(".player-delete-button");
    // player_new_button.addEventListener('click', addNewPlayer());

    const player_new_button = document.querySelector(".player-new-button");
    player_new_button.addEventListener('click', addNewPlayer("poupoupidou"));

}