T = int(input())
for i in range(T):
    a = input()
    alis = list(a)
    blis = list()
    for j in range(len(alis)):
        blis.append(alis[len(alis)-1-j])
    if alis == blis:
        print(f'#{i+1} 1')
    else:
        print(f'#{i+1} 0')