from PySide2.QtWidgets import *
from dimming_ui import Ui_MainWindow
from sense_emu import SenseHat
from time import sleep


class myApp(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super().__init__()
        Ui_MainWindow.setupUi(self, self)
        self.main()

    def main(self):
        self.sense = SenseHat()
        self.dx = 0
        self.dy = 0
        self.r = 0
        self.g = 0
        self.b = 0

    def flash(self):
        print("FLASH")
        for x in range(8):
            for y in range(8):
                self.sense.set_pixel(x, y, 255, 255, 255)

    def clear(self):
        print("CLEAR")
        for x in range(8):
            for y in range(8):
                self.sense.set_pixel(x, y, 0, 0, 0)

    def click(self, x, y):
        print(x, y)
        self.dx = x
        self.dy = y
        self.sense.set_pixel(self.dx, self.dy, self.r, self.g, self.b)
        sleep(1)
        self.sense.set_pixel(x, y, 0, 0, 0)

    def rslide(self, val_R):
        print(val_R)
        self.r = val_R * 2

    def gslide(self, val_G):
        print(val_G)
        self.g = val_G * 2

    def bslide(self, val_B):
        print(val_B)
        self.b = val_B * 2


app = QApplication()
win = myApp()
win.show()
app.exec_()