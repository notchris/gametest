import Phaser from 'phaser';
export default class SceneB extends Phaser.Scene {

    constructor() {
        super({key: "SceneB"});
    }

    preload () {

    }

    create () {

        console.log('Loaded SceneB')
    }

    update () {
        // Update loop
    }

}