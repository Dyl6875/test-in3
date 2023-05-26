radio.setGroup(105)
basic.forever(function () {
    radio.sendString("" + (input.lightLevel()))
    basic.pause(2000)
})
