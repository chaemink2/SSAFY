#include <stdio.h>
#include <signal.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <string.h>

// 서비스할 포트 미리 정해둠
const char *PORT = "12345";

int server_sock; // accpet 안내해주는 역할의 변수
int client_sock; // client에게 전달 받고 전달해주는 역할의 변수

void interrupt(int arg) // Socket 할당 제거해서 종료하는 함수
{
	printf("\nYou typed Ctrl + C\n");
	printf("Bye\n");

	close(client_sock);
	close(server_sock);
	exit(1);
}

void removeEnterChar(char *buf)
{
	int len = strlen(buf);
	for (int i = len - 1; i >= 0; i--)
	{
		if (buf[i] == '\n')
			buf[i] = '\0';
		break;
	}
}

int main()
{
	// Ctrl + C 누를 경우 안전종료
	signal(SIGINT, interrupt); // SIGINT 신호가 발생되면 interrupt 함수가 실행 돼서 안전종료 됨.

	// socket create
	server_sock = socket(PF_INET, SOCK_STREAM, 0); // TCP/IPV4 Socket 생성
	if (server_sock == -1) // Socket 생성 실패 시 방어 코드
	{
		printf("ERROR :: 1_Socket Create Error\n");
		exit(1);
	}

	// option setting
	// 종료 시 3분 정도 동일한 포트 배정 불가 에러 해결 (3분 제한 해제)
	int optval = 1;
	setsockopt(server_sock, SOL_SOCKET, SO_REUSEADDR, (void *)&optval, sizeof(optval));

	// 주소 설정
	// 1. 속성값을 저장할 구조체 하나 생성
	// 2. 만들어진 구조체에 Value 넣기
	// 3. 채워진 구조체 전달
	struct sockaddr_in server_addr = {0};
	server_addr.sin_family = AF_INET;
	server_addr.sin_addr.s_addr = htonl(INADDR_ANY); // IP 넣기
	server_addr.sin_port = htons(atoi(PORT)); // Port 넣기

	// bind
	if (bind(server_sock, (struct sockaddr *)&server_addr, sizeof(server_addr)) == -1) // sockaddr : cpu가 이해하기 쉬운 구조체
	{
		printf("ERROR :: 2_bind Error\n");
		exit(1);
	}

	// listen = 대기실 만들기
	if (listen(server_sock, 5) == -1)
	{
		printf("ERROR :: 3_listen Error");
		exit(1);
	}

	client_sock = 0;
	struct sockaddr_in client_addr = {0};
	socklen_t client_addr_len = sizeof(client_addr);

	while (1) // Server Socket 종료 조건 : ctrl + c
	{
		// 새로운 클라이언트를 위해 초기화
		memset(&client_addr, 0, sizeof(client_addr));

		// accpet
		client_sock = accept(server_sock, (struct sockaddr *)&client_addr, &client_addr_len);
		if (client_sock == -1)
		{
			printf("ERROR :: 4_accept Error\n");
			break;
		}

		// read & write, read 했는데 결과가 0이면 Client 종료, Client가 exit 보내면 종료
		char buf[100];
		while (1)
		{
			memset(buf, 0, 100);
			int len = read(client_sock, buf, 99);

			// remove '\n'
			removeEnterChar(buf);

			// client 와 연결이 끊어졌을 때 클라이언트 종료
			if (len == 0)
			{
				printf("INFO :: Disconnect with client... BYE\n");
				break;
			}

			// client 에서 exit 입력했을 때 클라이언트 종료
			if (!strcmp("exit", buf))
			{
				printf("INFO :: Client want close... BYE\n");
				break;
			}
			write(client_sock, buf, strlen(buf)); // 입력한 값 그대로 출력
		}
		// 클라이언트 소켓 close
		close(client_sock);
	}
	// 서버 소켓 close
	close(server_sock);
	return 0;
}
