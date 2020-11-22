radio.onReceivedNumber(function (receivedNumber) {
    廣播強度 = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -42, 0, 100)
})
let 廣播強度 = 0
radio.setGroup(77)
radio.setTransmitPower(3)
basic.forever(function () {
    radio.sendNumber(0)
})
basic.forever(function () {
    led.plotBarGraph(
    廣播強度,
    100
    )
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    basic.pause((120 - 廣播強度) * 10)
})
