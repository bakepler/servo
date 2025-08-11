ServoA = 0
MotorA = 0
ServoB = 0

def on_button_pressed_a():
    global ServoA
    if ServoA:
        ServoA = 0
    else:
        ServoA = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global MotorA
    if MotorA:
        MotorA = 0
    else:
        MotorA = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global ServoB
    if ServoB:
        ServoB = 0
    else:
        ServoB = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if ServoA:
        pins.servo_write_pin(AnalogPin.P0, 180)
    else:
        pins.servo_write_pin(AnalogPin.P0, 0)
    if ServoB:
        pins.servo_write_pin(AnalogPin.P1, 180)
        basic.show_string("" + str((ServoB)))
    else:
        pins.servo_write_pin(AnalogPin.P1, 0)
        basic.show_string("" + str((ServoB)))
    if MotorA:
        pins.digital_write_pin(DigitalPin.P13, 1)
        pins.digital_write_pin(DigitalPin.P12, 0)
    else:
        pins.digital_write_pin(DigitalPin.P13, 0)
        pins.digital_write_pin(DigitalPin.P12, 0)
basic.forever(on_forever)
