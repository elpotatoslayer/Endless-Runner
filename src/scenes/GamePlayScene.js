import Phaser from 'phaser';
import config from '../config/config';
import options from '../config/options';

export default class GamePlayScene extends Phaser.Scene {
  constructor() {
    super('GamePlay');
  }

  preload() {
    this.load.image('platform', './src/assets/platform.png');
    this.load.image('player', './src/assets/star.png');
  }

  
}