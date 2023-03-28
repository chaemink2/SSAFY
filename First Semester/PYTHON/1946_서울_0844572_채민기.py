t = int(input())

for i in range(t):
    print(f'#{i + 1}')
    a = int(input())
    b = 0
    for j in range(a):
        c = input().split()
        for k in range(int(c[1])):
            print(c[0], end='')
            b += 1
            if b == 10:
                print()
                b = 0

    print()