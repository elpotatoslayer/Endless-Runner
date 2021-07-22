import 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScene';
import PreloaderScene from './scenes/PreloaderScene';


class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('GamePlay', GamePlayScene);
    this.scene.add('LeaderBoard', LeaderBoardScene);
    this.scene.start('Game');
  }
}
window.game = new Game();
