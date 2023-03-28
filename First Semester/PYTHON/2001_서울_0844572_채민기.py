T = int(input())
for test_case in range(1, T + 1):

    n, m = map(int, input().split())
    arrange = [list(map(int, input().split())) for _ in range(n)]
    max_value = 0
    for i in range(n):
        for j in range(n):
            if i + m - 1 >= n or j + m - 1 >= n:
                continue

            sum_value = 0
            for k in range(m):
                for l in range(m):
                    sum_value += arrange[i + k][j + l]
            if sum_value > max_value:
                max_value = sum_value

    print(f"#{test_case} {max_value}")