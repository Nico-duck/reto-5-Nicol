basic.forever(function () {
    basic.showNumber(input.soundLevel())
    if (input.soundLevel() < 120) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
})
