class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  preload() {
    this.load.image('button', 'assets/imgs/image.png');
  }

  create() {
    this.add.text(400, 150, 'Game Over', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    const button = this.add.image(400, 300, 'button').setInteractive();
    button.on('pointerdown', () => {
        this.scene.start('LoginScene');
    });
  }
}
