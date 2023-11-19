input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    if (input.isGesture(Gesture.TiltRight)) {
        music.play(music.stringPlayable("G A B C5 C D E F ", 40), music.PlaybackMode.UntilDone)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        music.play(music.stringPlayable("G A B C5 C D E F ", 500), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("G A B C5 C D E F ", 237), music.PlaybackMode.UntilDone)
    }
})
