from gpiozero import LED, Button, PWMLED
from time import sleep
from signal import pause


def show(n):
    global num
    for m in num[8]: m.off()
    for m in num[n]: m.on()


led = LED(17)
motor = PWMLED(27)

g = LED(14)
f = LED(26)
a = LED(15)
b = LED(18)
e = LED(23)
d = LED(24)
c = LED(25)
DP = LED(8)

switch1 = Button(2)
switch2 = Button(3)
switch3 = Button(4)

num = [[a, b, c, d, e, f],
       [b, c],
       [a, b, g, e, d],
       [a, b, g, c, d],
       [f, g, b, c],
       [a, f, g, c, d],
       [a, f, g, e, c, d],
       [f, a, b, c],
       [a, b, c, d, e, f, g],
       [a, b, c, d, g, f]]


def UP():
    global value, number
    value += 0.1
    number += 1
    if value > 0.9: value = 0.9
    if number > 9: number = 9


def DOWN():
    global value, number
    value -= 0.1
    number -= 1
    if value < 0: value = 0
    if number < 0: number = 0


def START():
    global value, number
    led.on()
    sleep(0.01)


def STOP():
    global value, number
    value = 0.1
    number = 1
    motor.off()
    led.off()
    for m in num[8]: m.off()


def TOGGLE():
    global flag
    if flag == 0:
        flag = 1
    else:
        flag = 0


value = 0
number = 0
flag = 0

switch1.when_pressed = UP
switch2.when_pressed = DOWN
switch3.when_pressed = TOGGLE

while True:
    if flag == 0:
        STOP()

    elif flag == 1:
        START()
        motor.value = value
        show(number)