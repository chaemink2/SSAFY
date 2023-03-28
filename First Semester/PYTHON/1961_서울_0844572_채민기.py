def rotate_90(arr, n):
    alis = [[0] * n for _ in range(n)]

    for i in range(n):
        for j in range(n):
            alis[j][n - i - 1] = arr[i][j]
    return alis


T = int(input())
for test_case in range(1, T + 1):
    print(f'#{test_case}')


    N = int(input())
    blis = [list(map(int, input().split())) for _ in range(N)]
    clis = []
    clis.append(rotate_90(blis, N))

    for k in range(N - 1):
        clis.append(rotate_90(clis[k], N))
    for i in range(N):
        for j in range(N * 3):
            print(clis[j // N][i][j % N], end = '')
            if (j + 1) % N == 0:
                print(end = ' ')
        print()