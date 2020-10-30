import './style.css';
import Phaser from 'phaser';
import SceneA from './scenes/SceneA'
import SceneB from './scenes/SceneB'

const config = {
    width: 640,
    height: 480,
    type: Phaser.WEBGL,
    parent: 'render',
    scene: [SceneA, SceneB],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    }
};
new Phaser.Game(config);