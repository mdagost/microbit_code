input.onButtonPressed(Button.A, function () {
    s1.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    s1.change(LedSpriteProperty.X, 1)
})
let s1: game.LedSprite = null
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
s1 = game.createSprite(1, 2)
basic.forever(function () {
	
})
