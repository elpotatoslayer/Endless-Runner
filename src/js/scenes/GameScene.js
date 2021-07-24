// eslint-disable-next-line import/no-unresolved
import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.scene.start('Preloader');
  }
}