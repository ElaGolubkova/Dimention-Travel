class Win1 extends Phaser.Scene {
    constructor() {
        super("Win1");
        this.my = { sprite: {} };
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.bitmapFont('Game3Font', 'Game3Font.png', 'Game2Font.xml');
        this.load.image("winBackground", "platformer-level-1.png");
    }

    create() {
        let my = this.my;   

        //this.add.image(0, 0, "winBackground").setOrigin(0, 0);

        let background = this.add.image(0, 0, "winBackground").setOrigin(0, 0);
        background.setScale(1.5);


        this.add.bitmapText(700, 170, 'Game3Font', 'Passed level 1!', 64).setOrigin(0.5);
        this.add.bitmapText(700, 300, 'Game3Font', 'Good Job!', 150).setOrigin(0.5);
        this.add.bitmapText(700, 400, 'Game3Font', 'Made by: Ela Golubkova', 50).setOrigin(0.5);
        this.add.bitmapText(700, 600, 'Game3Font', 'Press enter to play next level', 70).setOrigin(0.5);
        
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    
        // background.displayWidth = this.sys.game.config.width;
        // background.displayHeight = this.sys.game.config.height;

    }
    

    update() {
        let my = this.my;

        if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
          this.scene.start('loadScene2'); 
        }
        
    }
}