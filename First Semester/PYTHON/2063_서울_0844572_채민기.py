N = int(input())
alis = list(map(int, input().split()))
alis.sort()
middle_number = N//2

print(alis[middle_number])