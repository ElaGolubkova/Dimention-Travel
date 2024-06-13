// Ela Golubkova
// Created: 5/18/2024
// Phaser: 3.70.0
// 
// Art assets from Kenny Assets:
// https://kenney.nl/assets 

// debug with extreme prejudice
"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    width: 1440,
    height: 900,
    scene: [Start, Load1, Platformer1, Win1, Load2, Platformer2, Win2, Load3, Platformer3, Win3]
}

var cursors;
const SCALE = 2.0;
var my = {sprite: {}, text: {}, vfx: {}};

const game = new Phaser.Game(config);