class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
  }

  create() {
    this.add.text(400, 300, 'Loading...', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

    this.time.delayedCall(2000, () => {
      this.scene.start('LobbyScene');
    });
  }
}
