input.onButtonPressed(Button.A, function () {
    tijd_zien()
})
input.onButtonPressed(Button.AB, function () {
    tijd_zien()
})
function tijd_zien () {
    basic.showString("" + uren + ":" + minuten + ":" + Seconde)
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("C5 G B A F A C5 B ", 199), music.PlaybackMode.UntilDone)
    }
    music.play(music.stringPlayable("C5 C5 C5 C5 - - - - ", 199), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.B, function () {
    tijd_zien()
})
let Seconde = 0
let uren = 0
let minuten = 0
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
minuten = 0
basic.forever(function () {
    for (let index = 0; index < 60; index++) {
        for (let index = 0; index < 60; index++) {
            basic.pause(1000)
            haloDisplay.range(Seconde, 1).showRainbow(1, 60)
            Seconde += 1
            haloDisplay.clear()
        }
        minuten += 1
        Seconde = 0
        tijd_zien()
    }
    uren += 1
    minuten = 0
    tijd_zien()
})
