basic.forever(function () {
    mecanumRobot.setLed(LedCount.Left, LedState.ON)
    mecanumRobot.setLed(LedCount.Right, LedState.ON)
    basic.pause(500)
    mecanumRobot.setLed(LedCount.Left, LedState.ON)
    mecanumRobot.setLed(LedCount.Right, LedState.ON)
})
