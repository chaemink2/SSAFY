# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'mainUI.ui'
##
## Created by: Qt User Interface Compiler version 6.4.0
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QBrush, QColor, QConicalGradient, QCursor,
    QFont, QFontDatabase, QGradient, QIcon,
    QImage, QKeySequence, QLinearGradient, QPainter,
    QPalette, QPixmap, QRadialGradient, QTransform)
from PySide6.QtWidgets import (QApplication, QLabel, QMainWindow, QMenuBar,
    QPushButton, QSizePolicy, QStatusBar, QWidget)

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        if not MainWindow.objectName():
            MainWindow.setObjectName(u"MainWindow")
        MainWindow.resize(962, 667)
        self.centralwidget = QWidget(MainWindow)
        self.centralwidget.setObjectName(u"centralwidget")
        self.startButton = QPushButton(self.centralwidget)
        self.startButton.setObjectName(u"startButton")
        self.startButton.setGeometry(QRect(810, 450, 101, 71))
        self.startButton.setFocusPolicy(Qt.NoFocus)
        self.leftButton = QPushButton(self.centralwidget)
        self.leftButton.setObjectName(u"leftButton")
        self.leftButton.setGeometry(QRect(50, 470, 71, 51))
        self.leftButton.setFocusPolicy(Qt.NoFocus)
        self.stopButton = QPushButton(self.centralwidget)
        self.stopButton.setObjectName(u"stopButton")
        self.stopButton.setGeometry(QRect(680, 450, 101, 71))
        self.stopButton.setFocusPolicy(Qt.NoFocus)
        self.midButton = QPushButton(self.centralwidget)
        self.midButton.setObjectName(u"midButton")
        self.midButton.setGeometry(QRect(130, 470, 71, 51))
        self.midButton.setFocusPolicy(Qt.NoFocus)
        self.rightButton = QPushButton(self.centralwidget)
        self.rightButton.setObjectName(u"rightButton")
        self.rightButton.setGeometry(QRect(210, 470, 71, 51))
        self.rightButton.setFocusPolicy(Qt.NoFocus)
        self.goButton = QPushButton(self.centralwidget)
        self.goButton.setObjectName(u"goButton")
        self.goButton.setGeometry(QRect(130, 410, 71, 51))
        self.goButton.setFocusPolicy(Qt.NoFocus)
        self.backButton = QPushButton(self.centralwidget)
        self.backButton.setObjectName(u"backButton")
        self.backButton.setGeometry(QRect(130, 530, 71, 51))
        self.backButton.setFocusPolicy(Qt.NoFocus)
        self.label = QLabel(self.centralwidget)
        self.label.setObjectName(u"label")
        self.label.setGeometry(QRect(200, 40, 151, 16))
        self.pic1 = QLabel(self.centralwidget)
        self.pic1.setObjectName(u"pic1")
        self.pic1.setGeometry(QRect(240, 90, 480, 320))
        self.pic1.setMinimumSize(QSize(0, 0))
        self.pic1.setStyleSheet(u"background-color: rgb(236, 26, 255);")
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QMenuBar(MainWindow)
        self.menubar.setObjectName(u"menubar")
        self.menubar.setGeometry(QRect(0, 0, 962, 22))
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QStatusBar(MainWindow)
        self.statusbar.setObjectName(u"statusbar")
        MainWindow.setStatusBar(self.statusbar)

        self.retranslateUi(MainWindow)
        self.startButton.clicked.connect(MainWindow.start)
        self.stopButton.clicked.connect(MainWindow.stop)
        self.goButton.pressed.connect(MainWindow.go)
        self.goButton.released.connect(MainWindow.stop)
        self.leftButton.pressed.connect(MainWindow.left)
        self.leftButton.released.connect(MainWindow.mid)
        self.midButton.clicked.connect(MainWindow.mid)
        self.rightButton.pressed.connect(MainWindow.right)
        self.rightButton.released.connect(MainWindow.mid)
        self.backButton.pressed.connect(MainWindow.back)
        self.backButton.released.connect(MainWindow.stop)

        QMetaObject.connectSlotsByName(MainWindow)
    # setupUi

    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(QCoreApplication.translate("MainWindow", u"MainWindow", None))
        self.startButton.setText(QCoreApplication.translate("MainWindow", u"START", None))
        self.leftButton.setText(QCoreApplication.translate("MainWindow", u"Left", None))
        self.stopButton.setText(QCoreApplication.translate("MainWindow", u"STOP", None))
        self.midButton.setText(QCoreApplication.translate("MainWindow", u"Mid", None))
        self.rightButton.setText(QCoreApplication.translate("MainWindow", u"Right", None))
        self.goButton.setText(QCoreApplication.translate("MainWindow", u"Go", None))
        self.backButton.setText(QCoreApplication.translate("MainWindow", u"Back", None))
        self.label.setText(QCoreApplication.translate("MainWindow", u"\uce74\uba54\ub77c \ud654\uba74", None))
        self.pic1.setText("")
    # retranslateUi

