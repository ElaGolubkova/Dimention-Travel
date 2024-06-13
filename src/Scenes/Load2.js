class Load2 extends Phaser.Scene {
    constructor() {
        super("loadScene2");
    }

    preload() {
        this.load.setPath("./assets/");

        // Load characters spritesheet
        this.load.atlas("platformer_characters", "tilemap-characters-packed.png", "tilemap-characters-packed.json");

        // Load tilemap information
        this.load.image("tilemap_tiles", "tilemap_packed.png");                         // Packed tilemap
        this.load.tilemapTiledJSON("platformer-level-2", "platformer-level-2.tmj");   // Tilemap in JSON

        // Load the tilemap as a spritesheet
        this.load.spritesheet("tilemap_sheet", "tilemap_packed.png", {
            frameWidth: 18,
            frameHeight: 18
        });

        // Particle Pack asset pack.
        this.load.multiatlas("kenny-particles", "kenny-particles.json");

        this.load.audio("jump", "phaseJump1.ogg");
        this.load.audio("collect", "phaserDown3.ogg");
        this.load.audio("death", "pepSound1.ogg");


        this.load.bitmapFont('Game2Font', 'Game2Font.png', 'Game2Font.xml');
    }

    create() {
        // this.anims.create({
        //     key: 'walk',
        //     frames: this.anims.generateFrameNames('platformer_characters', {
        //         prefix: "tile_",
        //         start: 4,
        //         end: 5,
        //         suffix: ".png",
        //         zeroPad: 4
        //     }),
        //     frameRate: 15,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'idle',
        //     defaultTextureKey: "platformer_characters",
        //     frames: [
        //         { frame: "tile_0004.png" }
        //     ],
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'jump',
        //     defaultTextureKey: "platformer_characters",
        //     frames: [
        //         { frame: "tile_0005.png" }
        //     ],
        // });

         // ...and pass to the next Scene
         this.scene.start("platformerScene2");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}