

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [LoginScene, LoadingScene, LobbyScene, GameScene, GameOverScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
};

const game = new Phaser.Game(config);
