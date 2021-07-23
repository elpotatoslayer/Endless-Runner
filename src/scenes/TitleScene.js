import Phaser from 'phaser';
import {createForm, destroyForm, destroyTitle, getName, createTitle} from '../modules/form'

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }

  create() {
    createTitle();

    this.gameButton = this.add.sprite(400, 300, 'mainButton').setInteractive();
    this.centerButton(this.gameButton, 1);

    this.gameText = this.add.text(0, 0, 'Play', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', () => {
      window.playerName = getName();
      destroyTitle();
      destroyForm();
      this.scene.start('GamePlay');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('mainButton-hover');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('mainButton');
    });

    createForm();
  }
}