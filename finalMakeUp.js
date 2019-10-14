// the loop to work in a method
radio.onReceivedNumber(function (receivedNumber) {
    // if statement to its condition
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . # # # .
            # . . . #
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # # . # #
            # # . # #
            `)
    } else {
        basic.showIcon(IconNames.Fabulous)
    }
    basic.pause(100)
    basic.clearScreen()
})
// button A request start order
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
// button B to stop
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.showString("SHWN")
