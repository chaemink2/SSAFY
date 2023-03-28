T = int(input())

for t in range(1, T + 1):
    test_case = [(0) * 9 for _ in range(9)]
    for i in range(9):
        test_case[i] = list(map(int, input().split()))

    ans_a = 1
    for i in range(9):
        test = {}
        for j in range(1, 10):
            test[j] = test_case[i].count(j)
        if 0 in test.values():
            ans_a = ans_a * 0
        else:
            ans_a = ans_a * 1

    ans_b = 1
    for i in range(9):
        test = {}
        test_case1 = []
        for j in range(9):
            test_case1 += [test_case[j][i]]
        for j in range(1, 10):
            test[j] = test_case1.count(j)
        if 0 in test.values():
            ans_b = ans_b * 0
        else:
            ans_b = ans_b * 1

    ans_c = 1
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            test = {}
            test_case2 = []
            for k in range(3):
                for l in range(3):
                    test_case2 += [test_case[k + i][l + j]]
            for k in range(1, 10):
                test[k] = test_case2.count(k)
            if 0 in test.values():
                ans_c = ans_c * 0
            else:
                ans_c = ans_c * 1

    answer = ans_a * ans_b * ans_c
    print(f'#{t} {answer}')