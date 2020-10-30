import Phaser from 'phaser';
import Bird from '../classes/Bird';
export default class SceneA extends Phaser.Scene {

    constructor() {
        super({key: "SceneA"});
    }

    preload () {
        this.load.spritesheet('bird', 
            './src/assets/img/bird.png',
            {
                frameWidth: 100,
                frameHeight: 100,
                margin: 0,
                spacing: 1
            }
        );
        this.load.image('bg1', './src/assets/img/bg1.png');
    }

    create () {
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.bg1 = this.add.image(270, 220, 'bg1', 0);
        this.bird = new Bird(this, 100, 100);
    }

    update () {
    }

}