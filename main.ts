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
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedString == "up") {
        ServoA = 0
    }
    if (receivedString == "down") {
        ServoA = 1
    }
    if (receivedString == "right") {
        ServoB = 0
    }
    if (receivedString == "left") {
        ServoB = 1
    }
    if (receivedString == "horn") {
        basic.showString("H")
    }
    if (receivedString.charAt(0) == "x") {
        ServoA = parseFloat(receivedString.substr(1, 3))
        bluetooth.uartWriteString(receivedString.substr(1, 3))
    }
    if (receivedString.charAt(0) == "c") {
        ServoB = parseFloat(receivedString.substr(1, 3))
        bluetooth.uartWriteString(receivedString.substr(1, 3))
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
let MotorA = 0
let ServoB = 0
let receivedString = ""
let ServoA = 0
bluetooth.startUartService()
basic.showIcon(IconNames.Sad)
basic.forever(function () {
    if (ServoA) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    if (ServoB) {
        pins.servoWritePin(AnalogPin.P1, 180)
    } else {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (MotorA) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
