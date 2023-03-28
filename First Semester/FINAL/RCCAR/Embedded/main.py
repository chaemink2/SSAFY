from PySide6.QtWidgets import *
from PySide6.QtCore import *
from PySide6.QtGui import *
from mainUI import Ui_MainWindow
import mysql.connector
import socket
from pynput import keyboard
from time import *

HOST = '70.12.230.108'
PORT = 9999

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect((HOST, PORT))

class keyThread(QThread):
    running = False

    def __init__(self):
        super().__init__()
        self.key_up_flag = False
        self.key_down_flag = False
        self.key_right_flag = False
        self.key_left_flag = False
        self.key_s_flag = False

    def on_press(self, key):
        try:
            if key == keyboard.Key.up and not self.key_up_flag:
                client_socket.sendall("1".encode())
                self.key_up_flag = True
                print("go")
            if key == keyboard.Key.down and not self.key_down_flag:
                client_socket.sendall("3".encode())
                self.key_down_flag = True
                print("back")
            if key == keyboard.Key.right and not self.key_right_flag:
                client_socket.sendall("6".encode())
                self.key_right_flag = True
                print("right")
            if key == keyboard.Key.left and not self.key_left_flag:
                client_socket.sendall("4".encode())
                self.key_left_flag = True
                print("left")
            if key == keyboard.Key.s and not self.key_s_flag:
                client_socket.sendall("7".encode())
                self.key_s_flag = True

        except AttributeError:
            print(f'알파벳 \'{key}\' 눌림')

    def on_release(self, key):
        try:
            if key == keyboard.Key.up and self.key_up_flag:
                client_socket.sendall("2".encode())
                self.key_up_flag = False
                print("stop")
                # return False

            if key == keyboard.Key.down and self.key_down_flag:
                client_socket.sendall("2".encode())
                self.key_down_flag = False
                print("stop")
                # return False

            if key == keyboard.Key.right and self.key_right_flag:
                client_socket.sendall("5".encode())
                self.key_right_flag = False
                print("middle")
                # return False

            if key == keyboard.Key.left and self.key_left_flag:
                client_socket.sendall("5".encode())
                self.key_left_flag = False
                print("middle")
                # return False

            if key == keyboard.Key.s and self.key_s_flag:
                client_socket.sendall("8".encode())
                self.key_s_flag = False
                print("shoot")
                # return False

        except AttributeError:
            print(f'알파벳 \'{key}\' 눌림')

    def run(self):
        with keyboard.Listener(on_press=self.on_press, on_release=self.on_release) as listener:
            listener.join()


class MyApp(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        self.init()

    def init(self):
        # self.db = mysql.connector.connect(host='13.209.47.149', user='mincoding', password='1234', database='minDB', auth_plugin='mysql_native_password')
        # self.cur = self.db.cursor()

        #timer setting
        self.timer = QTimer()
        self.timer.setInterval(500) #500ms
        # self.timer.timeout.connect(self.pollingQuery)

    def start(self):
        self.timer.start()

    def pollingQuery(self):
        self.cur.execute("select * from command order by time desc limit 15")
        self.ui.logText.clear()
        for (id, time, cmd_string, arg_string, is_finish) in self.cur:
            str = "%d | %s | %6s | %6s | %4d" % (id, time.strftime("%Y%m%d %H:%M:%S"), cmd_string, arg_string, is_finish)
            self.ui.logText.appendPlainText(str)

        self.cur.execute("select * from sensing order by time desc limit 15")
        self.ui.sensingText.clear()
        for (id, time, num1, num2, num3, meta_string, is_finish) in self.cur:
            str = "%d | %s | %6s | %6s | %6s | %10s | %4d" % (id, time.strftime("%Y%m%d %H:%M:%S"), num1, num2, num3, meta_string, is_finish)
            self.ui.sensingText.appendPlainText(str)
        self.db.commit()

    def closeEvent(self, event):
        client_socket.close()
        self.close()
        #self.insertCommand("stop", "0")
        # self.cur.close()
        # self.db.close()

    def insertCommand(self, cmd_string, arg_string):
        time = QDateTime().currentDateTime().toPython()
        is_finish = 0

        query = "insert into command(time, cmd_string, arg_string, is_finish) values (%s, %s, %s, %s)"
        value = (time, cmd_string, arg_string, is_finish)

        self.cur.execute(query, value)
        self.db.commit()

    def go(self):
        self.insertCommand("go", "0")

    def stop(self):
        self.insertCommand("stop", "0")

    def back(self):
        self.insertCommand("back", "0")

    def left(self):
        self.insertCommand("left", "0")

    def mid(self):
        self.insertCommand("mid", "0")

    def right(self):
        self.insertCommand("right", "0")


app = QApplication()
win = MyApp()
th1 = keyThread()
win.show()
th1.start()
app.exec()