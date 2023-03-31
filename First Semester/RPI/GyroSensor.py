from sense_hat import SenseHat
from time import sleep

x = 0
y = 0

A = [200, 0, 0]
B = [50, 50, 50]
C = [0, 200, 0]

dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]

sense = SenseHat()

MAP = [
    B, B, B, B, B, B, B, B,
    B, A, A, A, A, A, A, B,
    B, A, B, B, B, B, B, B,
    B, A, B, B, B, B, B, B,
    B, A, A, A, A, A, B, B,
    B, A, B, B, B, B, B, B,
    B, A, B, B, A, A, A, A,
    B, A, B, B, B, B, B, C]

paths = []
visited = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0]


def UP():
    global y, A
    if y >= 0 and MAP[8 * (y - 1) + x] != A: y -= 1


def DOWN():
    global y, A
    if y < 7 and MAP[8 * (y + 1) + x] != A: y += 1


def LEFT():
    global x, A
    if x >= 0 and MAP[8 * y + (x - 1)] != A: x -= 1


def RIGHT():
    global x, A
    if x < 7 and MAP[8 * y + (x + 1)] != A: x += 1


def DFS(mx, my, path=[]):
    global dx, dy, visited, C, paths

    path = path + [(mx, my)]

    if MAP[8 * my + mx] == C:
        paths.append(path)
        return

    for i in range(4):
        nx = mx + dx[i]
        ny = my + dy[i]

        if ny < 0 or nx < 0 or ny > 7 or nx > 7: continue
        if visited[8 * ny + nx] != 0: continue
        if MAP[8 * ny + nx] == A: continue

        visited[8 * ny + nx] = 1
        DFS(nx, ny, path)
        visited[8 * ny + nx] = 0


def NAVI(idx):
    global x, y
    sense.clear()
    sense.set_pixels(MAP)
    for i in idx:
        for j in i:
            sense.set_pixel(i[0], i[1], 0, 70, 70)
            sense.set_pixel(7, 7, 0, 200, 0)
    sense.set_pixel(x, y, 0, 0, 200)


while True:
    ori = sense.get_orientation_degrees()

    if ori["roll"] > 270 and ori["roll"] < 345:
        UP()

    if ori["roll"] > 15 and ori["roll"] < 90:
        DOWN()

    if ori["pitch"] > 270 and ori["pitch"] < 345:
        RIGHT()

    if ori["pitch"] > 15 and ori["pitch"] < 90:
        LEFT()

    if MAP[8 * y + x] == C:
        sense.show_message("S", 0.05, text_colour=[100, 100, 100])
        sense.show_message("U", 0.05, text_colour=[100, 100, 100])
        sense.show_message("C", 0.05, text_colour=[100, 100, 100])
        sense.show_message("C", 0.05, text_colour=[100, 100, 100])
        sense.show_message("E", 0.05, text_colour=[100, 100, 100])
        sense.show_message("S", 0.05, text_colour=[100, 100, 100])
        sense.show_message("S", 0.05, text_colour=[100, 100, 100])
        break

    DFS(x, y, path=[])

    min_len = 100
    min_idx = -1

    for i in paths:
        if len(i) < min_len:
            min_len = len(i)
            min_idx = i

    NAVI(min_idx)
    paths.clear()

    sleep(0.1)
