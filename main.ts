let ServoA = 0
let MotorA = 0
let ServoB = 0
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    if (ServoA) {
        ServoA = 0
    } else {
        ServoA = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (MotorA) {
        MotorA = 0
    } else {
        MotorA = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (ServoB) {
        ServoB = 0
    } else {
        ServoB = 1
    }
})
basic.forever(function () {
    if (ServoA) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    if (ServoB) {
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.showString("" + (ServoB))
    } else {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.showString("" + (ServoB))
    }
    if (MotorA) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
