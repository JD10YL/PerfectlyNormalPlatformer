scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.startEffect(effects.bubbles, 500)
    sprites.destroy(mySprite)
    color.startFadeFromCurrent(color.Black)
    timer.after(500, function () {
        game.reset()
    })
})
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
            LevelDragon()
        })
    }
})
function LevelFortress () {
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
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        mySprite2 = sprites.create(img`
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
        tiles.placeOnTile(mySprite2, value)
        animation.runImageAnimation(
        mySprite2,
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
}
function LevelDragon () {
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
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
        if (signread) {
            signread = false
            story.printCharacterText("One of these blocks will send you to the final level. But the one that does, will changes when you die.", "Sign")
        }
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile18`)) {
        if (sign2read) {
            sign2read = false
            story.printCharacterText("One of these tunnels MAY lead to the end. But the one that does, will change whenever you die", "Sign")
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    color.startFadeFromCurrent(color.Black)
    timer.after(1000, function () {
        color.startFadeFromCurrent(color.originalPalette)
        LevelDragon()
    })
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    color.startFadeFromCurrent(color.Black)
    timer.after(500, function () {
        game.reset()
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    mySprite.startEffect(effects.warmRadial, 500)
    color.startFadeFromCurrent(color.Black)
    timer.after(500, function () {
        color.startFadeFromCurrent(color.originalPalette)
        LevelFortress()
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
let sign2read = false
let skellie: Sprite = null
let mySprite2: Sprite = null
let signread = false
let mySprite: platformer.PlatformerSprite = null
color.startFade(color.Black, color.originalPalette)
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
for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
    tiles.placeOnTile(mySprite, value)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    mySprite2 = sprites.create(img`
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
    tiles.placeOnTile(mySprite2, value)
    animation.runImageAnimation(
    mySprite2,
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
