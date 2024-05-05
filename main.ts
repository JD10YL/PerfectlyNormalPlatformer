scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.startEffect(effects.bubbles, 500)
    sprites.destroy(mySprite)
    color.startFadeFromCurrent(color.Black)
    timer.after(500, function () {
        game.reset()
    })
})
function LevelCreate (num: number) {
    if (num == 1) {
        if (Math.percentChance(20)) {
            tiles.setCurrentTilemap(tilemap`level2`)
        } else if (Math.percentChance(20)) {
            tiles.setCurrentTilemap(tilemap`level7`)
        } else if (Math.percentChance(20)) {
            tiles.setCurrentTilemap(tilemap`level20`)
        } else if (Math.percentChance(20)) {
            tiles.setCurrentTilemap(tilemap`level22`)
        } else {
            tiles.setCurrentTilemap(tilemap`level9`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
            tiles.placeOnTile(mySprite, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            Spark = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . 7 7 . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . 7 . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . 7 7 . . . 
                . . . . . . . . . . 7 7 . . . . 
                . . . . . . . . . 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            tiles.placeOnTile(Spark, value)
            animation.runImageAnimation(
            Spark,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 7 7 7 . . . . . 
                . . . . . . . . . . 7 7 7 . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . 7 7 7 . . . . . . . . . . 
                . . . . . 7 7 7 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 7 7 . . . . . 
                . . . . . . . . . . 7 7 . . . . 
                . . . . . . . . . . . 7 7 . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . 7 7 7 7 7 7 . . 7 . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . 7 7 . . . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 7 . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . . . 7 . . 
                . . . . . 7 7 7 7 7 7 . . 7 7 . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . 7 7 . . 7 7 7 7 7 7 . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . 7 . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 7 . . . 7 7 7 7 7 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 7 7 7 7 7 . . . 7 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 7 . . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . 7 7 . . 7 7 7 7 7 7 . . . . . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . . . . . 7 7 7 7 7 7 . . 7 7 . 
                . . . . . . . . . . . . . 7 . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . . 7 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . 7 7 . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . 7 . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . 7 7 . . . 
                . . . . . . . . . . 7 7 . . . . 
                . . . . . . . . . 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 . . . . . . . . 
                . . . 7 7 7 . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . 7 7 7 . . . 
                . . . . . . . . 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            125,
            true
            )
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            skellie = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . f 6 6 6 6 6 6 f . . . . . 
                . . . f 6 6 6 6 6 5 f . . . . . 
                . . . f 6 6 6 1 7 5 f . . . . . 
                . . . f 6 6 5 1 7 5 f . . . . . 
                . . . f 6 5 5 5 5 5 f . . . . . 
                . . . f 5 5 5 5 5 5 f . . . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f 7 7 7 7 7 5 f . . . . 
                . . . . f 7 7 7 7 f f f . . . . 
                . . . . f 4 4 4 4 f . . . . . . 
                . . . . f 4 4 4 4 f . . . . . . 
                . . . . f e e e e f . . . . . . 
                . . . . f f f f f f . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(skellie, value)
            tiles.setTileAt(value, assets.tile`myTile5`)
        }
    } else if (num == 2) {
        if (Math.percentChance(19)) {
            tiles.setCurrentTilemap(tilemap`level14`)
        } else if (Math.percentChance(19)) {
            tiles.setCurrentTilemap(tilemap`level26`)
        } else if (Math.percentChance(19)) {
            tiles.setCurrentTilemap(tilemap`level28`)
        } else if (Math.percentChance(19)) {
            tiles.setCurrentTilemap(tilemap`level32`)
        } else if (Math.percentChance(19)) {
            tiles.setCurrentTilemap(tilemap`level34`)
        } else {
            tiles.setCurrentTilemap(tilemap`level36`)
        }
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile16`)
        for (let value of sprites.allOfKind(SpriteKind.Food)) {
            sprites.destroy(value)
        }
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            sprites.destroy(value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
            tiles.placeOnTile(mySprite, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            Spark = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . 7 7 . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . 7 . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . 7 7 . . . 
                . . . . . . . . . . 7 7 . . . . 
                . . . . . . . . . 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            tiles.placeOnTile(Spark, value)
            animation.runImageAnimation(
            Spark,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 7 7 7 . . . . . 
                . . . . . . . . . . 7 7 7 . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . 7 7 7 . . . . . . . . . . 
                . . . . . 7 7 7 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 7 7 . . . . . 
                . . . . . . . . . . 7 7 . . . . 
                . . . . . . . . . . . 7 7 . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . 7 7 7 7 7 7 . . 7 . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . 7 7 . . . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 7 . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . . . 7 . . 
                . . . . . 7 7 7 7 7 7 . . 7 7 . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . 7 7 . . 7 7 7 7 7 7 . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . 7 . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 7 . . . 7 7 7 7 7 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 7 7 7 7 7 . . . 7 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 7 . . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . 7 7 . . 7 7 7 7 7 7 . . . . . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . . . . . 7 7 7 7 7 7 . . 7 7 . 
                . . . . . . . . . . . . . 7 . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . . 7 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . 7 7 . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . 7 . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . 7 7 . . . 
                . . . . . . . . . . 7 7 . . . . 
                . . . . . . . . . 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 . . . . . . . . 
                . . . 7 7 7 . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . 7 7 7 . . . 
                . . . . . . . . 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            125,
            true
            )
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            skellie = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . f 6 6 6 6 6 6 f . . . . . 
                . . . f 6 6 6 6 6 5 f . . . . . 
                . . . f 6 6 6 1 7 5 f . . . . . 
                . . . f 6 6 5 1 7 5 f . . . . . 
                . . . f 6 5 5 5 5 5 f . . . . . 
                . . . f 5 5 5 5 5 5 f . . . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f 7 7 7 7 7 5 f . . . . 
                . . . . f 7 7 7 7 f f f . . . . 
                . . . . f 4 4 4 4 f . . . . . . 
                . . . . f 4 4 4 4 f . . . . . . 
                . . . . f e e e e f . . . . . . 
                . . . . f f f f f f . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(skellie, value)
            tiles.setTileAt(value, assets.tile`myTile5`)
        }
    } else if (num == 3) {
        tiles.setCurrentTilemap(tilemap`level5`)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        for (let value of sprites.allOfKind(SpriteKind.Food)) {
            sprites.destroy(value)
        }
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            sprites.destroy(value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
            tiles.placeOnTile(mySprite, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            Spark = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . 7 7 . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . 7 . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . 7 7 . . . 
                . . . . . . . . . . 7 7 . . . . 
                . . . . . . . . . 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            tiles.placeOnTile(Spark, value)
            animation.runImageAnimation(
            Spark,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 7 7 7 . . . . . 
                . . . . . . . . . . 7 7 7 . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . 7 7 7 . . . . . . . . . . 
                . . . . . 7 7 7 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 7 7 . . . . . 
                . . . . . . . . . . 7 7 . . . . 
                . . . . . . . . . . . 7 7 . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . 7 7 7 7 7 7 . . 7 . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . 7 7 . . . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 7 . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . . . 7 . . 
                . . . . . 7 7 7 7 7 7 . . 7 7 . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . 7 7 . . 7 7 7 7 7 7 . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . 7 . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 7 . . . 7 7 7 7 7 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 9 9 9 9 7 . . . 7 . 
                . 7 . . . 7 7 7 7 7 7 . . . 7 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 7 . . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . 7 7 . . 7 7 7 7 7 7 . . . . . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . 7 . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . . . . . 7 9 9 9 9 7 . . . 7 . 
                . . . . . 7 7 7 7 7 7 . . 7 7 . 
                . . . . . . . . . . . . . 7 . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . . 7 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . 7 7 . . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . 7 . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . . 7 7 . . . 
                . . . . . . . . . . 7 7 . . . . 
                . . . . . . . . . 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 . . . . . . . . 
                . . . 7 7 7 . . . . . . . . . . 
                . . 7 7 . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 9 9 9 9 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 7 7 . . 
                . . . . . . . . . . 7 7 7 . . . 
                . . . . . . . . 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            125,
            true
            )
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            skellie = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . f 6 6 6 6 6 6 f . . . . . 
                . . . f 6 6 6 6 6 5 f . . . . . 
                . . . f 6 6 6 1 7 5 f . . . . . 
                . . . f 6 6 5 1 7 5 f . . . . . 
                . . . f 6 5 5 5 5 5 f . . . . . 
                . . . f 5 5 5 5 5 5 f . . . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f 7 7 7 7 7 5 f . . . . 
                . . . . f 7 7 7 7 f f f . . . . 
                . . . . f 4 4 4 4 f . . . . . . 
                . . . . f 4 4 4 4 f . . . . . . 
                . . . . f e e e e f . . . . . . 
                . . . . f f f f f f . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(skellie, value)
            tiles.setTileAt(value, assets.tile`myTile5`)
        }
    }
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile3`)) {
        mySprite.startEffect(effects.confetti, 1000)
        sprites.destroy(mySprite)
        color.startFadeFromCurrent(color.Black)
        timer.after(500, function () {
            game.reset()
        })
    }
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile4`)) {
        color.startFadeFromCurrent(color.Black)
        timer.after(1000, function () {
            color.startFadeFromCurrent(color.originalPalette)
            LevelCreate(3)
        })
    }
})
function SettingsMenu () {
    myMenu.close()
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("MUSIC TOGGLE", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . . f f . f f f . . 
        . . . . . . . . f f . . f f . . 
        . . . . . . . . f f . . . f . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("SFX TOGGLE", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . f f f . . 2 . 
        . . . . . . . . f a a f . 2 . . 
        . . . . . . f f a a a f . . . . 
        . f f f f f a a a a a f . . . . 
        . f a a a a a a a a a f . 2 2 . 
        . f a a a a a a a a a f . . . . 
        . f a a a a a a a a a f . . . . 
        . f a a a a a a a a a f . 2 2 . 
        . f f f f f a a a a a f . . . . 
        . . . . . . f f a a a f . . . . 
        . . . . . . . . f a a f . 2 . . 
        . . . . . . . . . f f f . . 2 . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("EXIT", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . 2 2 2 2 . . . . . . . . . 
        . . 2 2 2 2 2 . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . 2 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    )
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "MUSIC TOGGLE") {
            if (MOSIC_ON_thx_grson) {
                MOSIC_ON_thx_grson = false
                music.stopAllSounds()
            } else {
                music.play(music.createSong(hex`004b000408080201001c000f05001202c102c20100040500280000006400280003140006020004500100000400011e04000800012408000c0001250c001000011e10001800012918001c0001271c002000012520002400012424002600012226002800012428002c0001252c003000012430003800012438004000012240004400012044004800012548004c0001274c005000012050005800012a58005c0001295c006000012760006400012564006600012466006800012768006c0001256c007000012070007800012778008000012580008400011e84008800012488008c0001258c009000011e90009800012998009c0001279c00a0000125a000a4000124a400a6000122a600a8000124a800ac000125ac00b0000124b000b8000124b800c0000122c000c400011ec400c8000125c800cc000127cc00d0000120d000d800012ad800dc000129dc00e0000127e000e4000125e400e6000124e600e8000127e800ec000125ec00f0000120f000f8000127f8000001012505001c000f0a006400f4010a0000040000000000000000000000000000000002b40000000800010c08001000010a10001800010818002000010620002800010528003000010530003800010640004800011148005000010f50005800010d58006000010f60006800010d68007000010c70007800010a78008000010680008800010c88009000010a9000980001089800a0000106a000a8000105a800b0000105b000b8000106c000c8000111c800d000010fd000d800010dd800e000010ce000e800010de800f000010cf000f800010af80000010106`), music.PlaybackMode.LoopingInBackground)
                MOSIC_ON_thx_grson = true
            }
        } else if (selection == "SFX TOGGLE") {
            if (SFX_ON) {
                SFX_ON = false
            } else {
                SFX_ON = true
            }
        } else if (selection == "EXIT") {
            myMenu.close()
            MainMenuHomeScreen()
        }
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    color.startFadeFromCurrent(color.Black)
    timer.after(1000, function () {
        color.startFadeFromCurrent(color.originalPalette)
    })
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    color.startFadeFromCurrent(color.Black)
    timer.after(500, function () {
        game.reset()
    })
})
function MainMenuHomeScreen () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("START GAME", img`
        . . . . . . . . . . . . . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 1 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 1 1 1 6 6 6 6 6 6 6 . 
        . 6 6 6 6 1 1 1 1 1 6 6 6 6 6 . 
        . 6 6 6 6 1 1 1 1 1 1 6 6 6 6 . 
        . 6 6 6 6 1 1 1 1 1 1 1 6 6 6 . 
        . 6 6 6 6 1 1 1 1 1 1 6 6 6 6 . 
        . 6 6 6 6 1 1 1 1 1 6 6 6 6 6 . 
        . 6 6 6 6 1 1 1 6 6 6 6 6 6 6 . 
        . 6 6 6 6 1 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("SETTINGS", img`
        . . . . . . f f f f . . . . . . 
        . . . f . . f a a f . . f . . . 
        . . f a f . f a a f . f a f . . 
        . f a a a f f a a f f a a a f . 
        . . f a a a a a a a a a a f . . 
        . . . f a a a a a a a a f . . . 
        f f f f a a a a a a a a f f f f 
        f a a a a a a f f a a a a a a f 
        f a a a a a a f f a a a a a a f 
        f f f f a a a a a a a a f f f f 
        . . . f a a a a a a a a f . . . 
        . . f a a a a a a a a a a f . . 
        . f a a a f f a a f f a a a f . 
        . . f a f . f a a f . f a f . . 
        . . . f . . f a a f . . f . . . 
        . . . . . . f f f f . . . . . . 
        `),
    miniMenu.createMenuItem("CHARACTER SELECTION", img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f e e e e e e e e e e e e f f 
        f f e e e e e e e e e e e e f f 
        f f e e e e e e e e e e d d f f 
        f f e e e e e e e e e e d d f f 
        f f e e e e e e 1 1 7 7 d d f f 
        f f e e e e e e 1 1 7 7 d d f f 
        f f e e e e d d 1 1 7 7 d d f f 
        f f e e e e d d 1 1 7 7 d d f f 
        f f e e d d d d d d d d d d f f 
        f f e e d d d d d d d d d d f f 
        f f d d d d d d d d d d d d f f 
        f f d d d d d d d d d d d d f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `)
    )
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "START GAME") {
            mySprite = platformer.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e d f . . . . 
                . . . . f e e e 1 7 d f . . . . 
                . . . . f e e d 1 7 d f . . . . 
                . . . . f e d d d d d f . . . . 
                . . . . f d d d d d d f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . f 2 2 2 2 f . . . . . 
                . . . . . f d d d d f . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f 8 8 8 8 f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.Player)
            platformer.moveSprite(mySprite, true, 80)
            platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnUpPressed, true)
            platformer.setFeatureEnabled(platformer.PlatformerFeatures.MovementMomentum, true)
            platformer.setFeatureEnabled(platformer.PlatformerFeatures.WallJumps, false)
            platformer.setConstant(mySprite, platformer.PlatformerConstant.MaxJumpHeight, 49)
            signread = true
            scene.cameraFollowSprite(mySprite)
            myMenu.close()
            LevelCreate(1)
        } else if (selection == "SETTINGS") {
            SettingsMenu()
        } else if (selection == "CHARACTER SELECTION") {
        	
        }
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    mySprite.startEffect(effects.warmRadial, 500)
    color.startFadeFromCurrent(color.Black)
    timer.after(500, function () {
        color.startFadeFromCurrent(color.originalPalette)
        LevelCreate(2)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    mySprite.startEffect(effects.warmRadial, 500)
    sprites.destroy(mySprite)
    color.startFadeFromCurrent(color.Black)
    timer.after(500, function () {
        game.reset()
    })
})
let signread = false
let SFX_ON = false
let myMenu: miniMenu.MenuSprite = null
let skellie: Sprite = null
let Spark: Sprite = null
let mySprite: platformer.PlatformerSprite = null
let MOSIC_ON_thx_grson = false
color.startFade(color.Black, color.originalPalette)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999711111111111111111117999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
music.setVolume(20)
music.play(music.createSong(hex`004b000408080201001c000f05001202c102c20100040500280000006400280003140006020004500100000400011e04000800012408000c0001250c001000011e10001800012918001c0001271c002000012520002400012424002600012226002800012428002c0001252c003000012430003800012438004000012240004400012044004800012548004c0001274c005000012050005800012a58005c0001295c006000012760006400012564006600012466006800012768006c0001256c007000012070007800012778008000012580008400011e84008800012488008c0001258c009000011e90009800012998009c0001279c00a0000125a000a4000124a400a6000122a600a8000124a800ac000125ac00b0000124b000b8000124b800c0000122c000c400011ec400c8000125c800cc000127cc00d0000120d000d800012ad800dc000129dc00e0000127e000e4000125e400e6000124e600e8000127e800ec000125ec00f0000120f000f8000127f8000001012505001c000f0a006400f4010a0000040000000000000000000000000000000002b40000000800010c08001000010a10001800010818002000010620002800010528003000010530003800010640004800011148005000010f50005800010d58006000010f60006800010d68007000010c70007800010a78008000010680008800010c88009000010a9000980001089800a0000106a000a8000105a800b0000105b000b8000106c000c8000111c800d000010fd000d800010dd800e000010ce000e800010de800f000010cf000f800010af80000010106`), music.PlaybackMode.LoopingInBackground)
let CHARACTER = 1
MOSIC_ON_thx_grson = true
MainMenuHomeScreen()
game.onUpdateInterval(3000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.vx == -25) {
            value.setVelocity(25, 0)
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . f 6 6 6 6 6 6 f . . . . . 
                . . . f 6 6 6 6 6 5 f . . . . . 
                . . . f 6 6 6 1 7 5 f . . . . . 
                . . . f 6 6 5 1 7 5 f . . . . . 
                . . . f 6 5 5 5 5 5 f . . . . . 
                . . . f 5 5 5 5 5 5 f . . . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f 7 7 7 7 7 5 f . . . . 
                . . . . f 7 7 7 7 f f f . . . . 
                . . . . f 4 4 4 4 f . . . . . . 
                . . . . f 4 4 4 4 f . . . . . . 
                . . . . f e e e e f . . . . . . 
                . . . . f f f f f f . . . . . . 
                `)
        } else if (value.vx == 25) {
            value.setVelocity(-25, 0)
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f f f . . . 
                . . . . . f 6 6 6 6 6 6 f . . . 
                . . . . . f 5 6 6 6 6 6 f . . . 
                . . . . . f 5 7 1 6 6 6 f . . . 
                . . . . . f 5 7 1 5 6 6 f . . . 
                . . . . . f 5 5 5 5 5 6 f . . . 
                . . . . . f 5 5 5 5 5 5 f . . . 
                . . . . f f f f f f f f f . . . 
                . . . . f 5 7 7 7 7 7 f . . . . 
                . . . . f f f 7 7 7 7 f . . . . 
                . . . . . . f 4 4 4 4 f . . . . 
                . . . . . . f 4 4 4 4 f . . . . 
                . . . . . . f e e e e f . . . . 
                . . . . . . f f f f f f . . . . 
                `)
        } else {
            if (value.isHittingTile(CollisionDirection.Left)) {
                value.setVelocity(25, 0)
                value.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f . . . . . 
                    . . . f 6 6 6 6 6 6 f . . . . . 
                    . . . f 6 6 6 6 6 5 f . . . . . 
                    . . . f 6 6 6 1 7 5 f . . . . . 
                    . . . f 6 6 5 1 7 5 f . . . . . 
                    . . . f 6 5 5 5 5 5 f . . . . . 
                    . . . f 5 5 5 5 5 5 f . . . . . 
                    . . . f f f f f f f f f . . . . 
                    . . . . f 7 7 7 7 7 5 f . . . . 
                    . . . . f 7 7 7 7 f f f . . . . 
                    . . . . f 4 4 4 4 f . . . . . . 
                    . . . . f 4 4 4 4 f . . . . . . 
                    . . . . f e e e e f . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    `)
            } else if (value.isHittingTile(CollisionDirection.Right)) {
                value.setVelocity(-25, 0)
                value.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . . . f 6 6 6 6 6 6 f . . . 
                    . . . . . f 5 6 6 6 6 6 f . . . 
                    . . . . . f 5 7 1 6 6 6 f . . . 
                    . . . . . f 5 7 1 5 6 6 f . . . 
                    . . . . . f 5 5 5 5 5 6 f . . . 
                    . . . . . f 5 5 5 5 5 5 f . . . 
                    . . . . f f f f f f f f f . . . 
                    . . . . f 5 7 7 7 7 7 f . . . . 
                    . . . . f f f 7 7 7 7 f . . . . 
                    . . . . . . f 4 4 4 4 f . . . . 
                    . . . . . . f 4 4 4 4 f . . . . 
                    . . . . . . f e e e e f . . . . 
                    . . . . . . f f f f f f . . . . 
                    `)
            } else {
                value.setVelocity(25, 0)
                value.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f . . . . . 
                    . . . f 6 6 6 6 6 6 f . . . . . 
                    . . . f 6 6 6 6 6 5 f . . . . . 
                    . . . f 6 6 6 1 7 5 f . . . . . 
                    . . . f 6 6 5 1 7 5 f . . . . . 
                    . . . f 6 5 5 5 5 5 f . . . . . 
                    . . . f 5 5 5 5 5 5 f . . . . . 
                    . . . f f f f f f f f f . . . . 
                    . . . . f 7 7 7 7 7 5 f . . . . 
                    . . . . f 7 7 7 7 f f f . . . . 
                    . . . . f 4 4 4 4 f . . . . . . 
                    . . . . f 4 4 4 4 f . . . . . . 
                    . . . . f e e e e f . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    `)
            }
        }
    }
})
