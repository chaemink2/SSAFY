from gpiozero import LED
from gpiozero import Button
from signal import pause
from time import sleep

button = Button(2)
oddLED = LED(3)
evenLED = LED(4)

mode = 1


def toggleMode():
    global mode
    mode = 3 - mode


button.when_pressed = toggleMode

while True:
    if mode == 1:
        oddLED.on()
        sleep(0.1)
        oddLED.off()
        evenLED.on()
        sleep(0.1)
        evenLED.off()
    elif mode == 2:
        oddLED.on()
        evenLED.on()
        sleep(0.1)
        oddLED.off()
        evenLED.off()
        sleep(0.1)
