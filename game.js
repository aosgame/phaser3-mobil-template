let game;

let gameOptions = {
}
window.onload = function () {
    let gameConfig = {
        type: Phaser.AUTO,
        backgroundColor: 0x7ed6df,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "thegame",
            width: 320,
            height: 480
        },
        scene: playGame,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 0
                }
            }
        }
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
}
class playGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");
    }
    preload() {
       
    }
    create() {

    }
    update(){

    }
}
