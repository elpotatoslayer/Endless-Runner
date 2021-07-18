import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import PreloaderScene from './js/scenes/PreloaderScene';


class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.add('Preloader', PreloaderScene)
    this.scene.start('Game');
  }
}
window.game = new Game();
