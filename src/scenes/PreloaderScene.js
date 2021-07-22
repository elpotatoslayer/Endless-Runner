import Phaser from 'phaser';
import background from '../assets/background.png';
import player from '../assets/p1.png';
import obstacle from '../assets/obstacle.png';
import bsod from '../assets/fail.jpg';
import mainButton from '../assets/ui/main_button.png';
import mainButtonHover from '../assets/ui/main_button_hover.png';
import ground from '../assets/piso.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }

  preload() {

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0xD1D1D1, 0.8);
    progressBox.fillRect(240, 400, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 80,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 125,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });

    // load assets needed in our game
    this.load.image('mainButton', mainButton);
    this.load.image('mainButton-hover', mainButtonHover)
    this.load.image('ground', ground);
    this.load.image('obstacle', obstacle);
    this.load.image('background', background);
    this.load.image('bsod', bsod) ;
    this.load.spritesheet('player',
    player,
    { frameWidth: 25, frameHeight: 31 });
  }

} 