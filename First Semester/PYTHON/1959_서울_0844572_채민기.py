import math

T = int(input())
for test_case in range(1, T + 1):

    n, m = map(int, input().split())

    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    max_value = -math.inf

    if len(a) > len(b):
        for offset in range(len(a) - len(b) + 1):
            value = 0
            for i in range(len(b)):
                value += a[i + offset] * b[i]
            if value > max_value:
                max_value = value
    else:
        for offset in range(len(b) - len(a) + 1):
            value = 0
            for i in range(len(a)):
                value += a[i] * b[i + offset]
            if value > max_value:
                max_value = value

    print(f'#{test_case} {max_value}')