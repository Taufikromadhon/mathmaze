const LEVEL_COUNT = 3;
/*====================
    Loading state
 ====================*/
LoadingState = {};

LoadingState.init = function() {
    //Keep crispy-looking pixels
    this.game.renderer.renderSession.roundPixels = true;
};

LoadingState.preload = function() {
    //Load json files
    this.game.load.json('level:0', 'data/level00.json');
    this.game.load.json('level:1', 'data/level01.json');
    this.game.load.json('level:2', 'data/level02.json');
    
    
    //Load walls
    this.game.load.image('background', 'images/background/background.png');
    this.game.load.image('wall_brown:8x1', 'images/walls/wall_brown:8x1.png');
    this.game.load.image('wall_brown:1x8', 'images/walls/wall_brown:1x8.png');
    this.game.load.image('wall_brown:1x4', 'images/walls/wall_brown:1x4.png');
    this.game.load.image('wall_brown:2x19', 'images/walls/wall_brown:2x19.png');
    this.game.load.image('wall_brown:2x1', 'images/walls/wall_brown:2x1.png');
    this.game.load.image('wall_brown:4x1', 'images/walls/wall_brown:4x1.png');
    this.game.load.image('wall_brown:26x1', 'images/walls/wall_brown:26x1.png');
    this.game.load.image('wall_brown', 'images/walls/wall_brown.png');
    this.game.load.image('wall_brown:1x0.5', 'images/walls/wall_brown:1x0.5.png');
    this.game.load.image('wall_brown:0.5x1', 'images/walls/wall_brown:0.5x1.png');
    
    //Load environment
    this.game.load.image('finish', 'images/environment/finish.png');
    this.game.load.image('quest:2+1', 'images/environment/quest:2+1.png');
    this.game.load.image('quest:4+2', 'images/environment/quest:4+2.png');
    this.game.load.image('quest:10-1', 'images/environment/quest:10-1.png');
    this.game.load.image('quest:5+2', 'images/environment/quest:5+2.png');
    this.game.load.image('quest:2x3', 'images/environment/quest:2x3.png');
    this.game.load.image('quest:9|3', 'images/environment/quest:9|3.png');
    this.game.load.image('quest:7+3', 'images/environment/quest:7+3.png');
    this.game.load.image('quest:8-4', 'images/environment/quest:8-4.png');
    this.game.load.image('quest:6x1', 'images/environment/quest:6x1.png');
    this.game.load.image('quest:4|2', 'images/environment/quest:4|2.png');
    this.game.load.image('buttonBlue:icon:3', 'images/environment/button_blue:3.png');
    this.game.load.image('buttonBlue:icon:4', 'images/environment/button_blue:4.png');
    this.game.load.image('buttonRed:icon:6', 'images/environment/button_red:6.png');
    this.game.load.image('buttonRed:icon:7', 'images/environment/button_red:7.png');
    
    //Load spritesheets
    this.game.load.spritesheet('hero', 'images/player/characterSprite.png', 32, 32);
    this.game.load.spritesheet('greyCrate', 'images/crates/crate_grey.png', 32, 32);
    this.game.load.spritesheet('woodCrate', 'images/crates/crate_wood.png', 32, 32);
    this.game.load.spritesheet('redCrate', 'images/crates/crate_red.png', 32, 32);
    this.game.load.spritesheet('steelCrate', 'images/crates/crate_steel.png', 32, 32);
    this.game.load.spritesheet('buttonBlue', 'images/environment/button_blue.png', 32, 64);
    this.game.load.spritesheet('buttonRed', 'images/environment/button_red.png', 32, 64);
    this.game.load.spritesheet('holeBlue', 'images/environment/door_blue.png', 32, 32);
    this.game.load.spritesheet('holeRed', 'images/environment/door_red.png', 32, 32);
    
    //Load audio
    this.game.load.audio('bgm', ['audio/bgm.mp3', 'audio/bgm.ogg']);
};

LoadingState.create = function() {
    this.game.state.start('play', true, false, {level: 0});
};
