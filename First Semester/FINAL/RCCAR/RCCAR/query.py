import mysql.connector
from threading import Timer
from time import sleep
import signal
import sys

def closeDB(signal, frame):
    print("BYE")
    cur.close()
    db.close()
    timer.cancel()
    sys.exit(0)

def polling():
    global cur, db
    
    cur.execute("select * from command order by time desc limit 1")
    for (id, time, cmd_string, arg_string, is_finish) in cur:
        print(cmd_string, arg_string)

    db.commit()
     
    global timer
    timer = Timer(1, polling)
    timer.start()

#init
db = mysql.connector.connect(host='13.209.47.149', user='mincoding', password='1234', database='minDB', auth_plugin='mysql_native_password')
cur = db.cursor()
timer = None
signal.signal(signal.SIGINT, closeDB)
polling()

#main thread
while True:
    print("KFC MAIN")
    sleep(0.5)
    pass
