from Raspi_MotorHAT import Raspi_MotorHAT, Raspi_DCMotor
from Raspi_PWM_Servo_Driver import PWM
import mysql.connector
from threading import Timer
from time import sleep
import signal
import sys
import socket

HOST = '70.12.230.108'
PORT = 9999

def closeDB(signal, frame):
    print("BYE")
    mh.getMotor(2).run(Raspi_MotorHAT.RELEASE)
    cur.close()
    db.close()
    timer.cancel()
    sys.exit(0)

def polling():
    global cur, db, ready
    
    cur.execute("select * from command order by time desc limit 1")
    for (id, time, cmd_string, arg_string, is_finish) in cur:
        if is_finish == 1 : break
        ready = (cmd_string, arg_string)
        cur.execute("update command set is_finish=1 where is_finish=0")

    db.commit()
     
    global timer
    timer = Timer(0.1, polling)
    timer.start()

def go():
    myMotor.setSpeed(200)
    myMotor.run(Raspi_MotorHAT.FORWARD)

def back():
    myMotor.setSpeed(200)
    myMotor.run(Raspi_MotorHAT.BACKWARD)

def stop():
    myMotor.setSpeed(200)
    myMotor.run(Raspi_MotorHAT.RELEASE)

def left():
    pwm.setPWM(0, 0, 290)

def mid():
    pwm.setPWM(0, 0, 370)

def right():
    pwm.setPWM(0, 0, 440)

def shoot():
    pwm.setPWM(1, 0, 300)

def relocate():
    pwm.setPWM(1, 0, 600)

#init
#db = mysql.connector.connect(host='13.209.47.149', user='mincoding', password='1234', database='minDB', auth_plugin='mysql_native_password')
#cur = db.cursor()
#ready = None
timer = None

mh = Raspi_MotorHAT(addr=0x6f)
myMotor = mh.getMotor(2)
pwm = PWM(0x6F)
pwm.setPWMFreq(60)

signal.signal(signal.SIGINT, closeDB)
#polling()

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind((HOST, PORT))
server_socket.listen()
client_socket, addr = server_socket.accept()

print('Connected by', addr)

#main thread
while True:
    sleep(0.1)
    data = client_socket.recv(1024)
    
    if not data:
        continue

    print(data.decode()) 
    if data.decode() == "1" : go()
    if data.decode() == "2" : stop()
    if data.decode() == "3" : back()
    if data.decode() == "4" : left()
    if data.decode() == "5" : mid()
    if data.decode() == "6" : right()
    if data.decode() == "7" : shoot()
    if data.decode() == "8" : relocate()

    # if ready == None : continue

    # cmd, arg = ready
    # ready = None

    # if cmd == "go" : go()
    # if cmd == "back" : back()
    # if cmd == "stop" : stop()
    # if cmd == "left" : left()
    # if cmd == "mid" : mid()
    # if cmd == "right" : right()

client_socket.close()
server_socket.close()
