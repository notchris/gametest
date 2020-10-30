import Phaser from 'phaser';
export default class Bird extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        this.scene = scene;
        this.setTexture('bird');
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.setPosition(x, y);
        this.setOrigin(0.5);
        this.body.setBounce(0);
        this.body.setCollideWorldBounds(true);
        this.x = x;
        this.y = y;
        this.setDisplaySize(50, 50)
        

        // Animations
        this.scene.anims.create({
            key: 'flap',
            frames: scene.anims.generateFrameNumbers('bird', { start: 0, end: 6 }),
            frameRate: 10,
            repeat: -1
        });

    }

    preUpdate (time, delta) {
        super.preUpdate(time, delta);
        if (this.angle < 50) {
            this.angle += 2;
        }
        if (Phaser.Input.Keyboard.JustDown(this.scene.spacebar)){
            this.anims.play('flap', true);
            this.body.setVelocityY(-350);
            this.scene.tweens.add({
              targets: this,
              props: { angle: -50 },
              duration: 150,
              ease: "Power0"
            });
            this.scene.time.delayedCall(500, () => {
                this.anims.stop('flap', true);
            }, null, this);

        }
    }

}