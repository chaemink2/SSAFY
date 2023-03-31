from PySide6.QtWidgets import *
from PySide6.QtGui import *

names = []

def refreshListview():
    model = QStandardItemModel()

    for item in names:
        model.appendRow(QStandardItem(item))

    view.setModel(model)

def appendName():
    if line1.text() in names:
        alert = QMessageBox()
        alert.setText("이미 있는 이름입니다")
        alert.exec()
    else:
        if len(line1.text()) > 0:
            names.append(line1.text())
            refreshListview()
        if len(line1.text()) == 0:
            alert = QMessageBox()
            alert.setText("이름을 입력해주세요")
            alert.exec()

def removeName():
    if line1.text() in names:
        if len(line1.text()) > 0:
            names.remove(line1.text())
            refreshListview()
        if len(line1.text()) == 0:
            alert = QMessageBox()
            alert.setText("이름을 입력해주세요")
            alert.exec()
    else:
        alert = QMessageBox()
        alert.setText("없는 이름입니다")
        alert.exec()

def quitProgram():
    app.quit()

# 윈도우 설정
app = QApplication()
win = QMainWindow()
win.setWindowTitle("인맥 관리 프로그램")
win.setGeometry(200,200,500,500)

# 메뉴바 설정
menu = win.menuBar()
menuFile = menu.addMenu("메뉴")
menuQuit = menu.addMenu("종료")
add = QAction("추가", win)
remove = QAction("제거", win)
quit = QAction("종료",win)
menuFile.addAction(add)
menuFile.addAction(remove)
menuQuit.addAction(quit)

# 하단바 설정
bar = win.statusBar()
bar.showMessage("인맥을 관리합니다.")

# 메인 윈도우 설정
main = QWidget()
win.setCentralWidget(main)

# 이름 입력 후 추가 제거 설정
form = QFormLayout()
line1 = QLineEdit()
lbl = QLabel("인맥을 관리합시다.")

button1 = QPushButton("추가")
button2 = QPushButton("제거")
hlay = QHBoxLayout()
hlay.addWidget(button1)
hlay.addWidget(button2)

view = QListView()

form.addRow("", lbl)
form.addRow("name ", line1)
form.addRow(hlay)
form.addRow(view)

main.setLayout(form)

# 이름 추가 제거
button1.clicked.connect(appendName)
button2.clicked.connect(removeName)

# 종료 누를 경우 프로그램 종료
quit.triggered.connect(quitProgram)

win.show()
app.exec()