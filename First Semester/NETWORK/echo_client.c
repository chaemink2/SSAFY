#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <signal.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>

// AWS IP
const char *IP = "127.0.0.1";
const char *PORT = "12345";

int sock; // Client�� Socket

void interrupt(int arg) // Socket �Ҵ� ���� �Լ�
{
	printf("\nYou typped Ctrl + C\n");
	printf("Bye\n");

	close(sock);
	exit(1);
}

int main()
{
	signal(SIGINT, interrupt); // SIGINT ��ȣ�� �޾Ƽ� interrupt�Լ��� ���� �Ѵ�

	sock = socket(PF_INET, SOCK_STREAM, 0); // Socket ����, IPV4 + ���������� = TCP/IP �ۿ� ����
	if (sock == -1) // Socket ���� ���� ��� �ڵ�
	{
		printf("ERROR :: 1_Socket Create Error\n");
		exit(1);
	}

	struct sockaddr_in addr = {0}; // Socket �ּ� �Ҵ�
	addr.sin_family = AF_INET;
	addr.sin_addr.s_addr = inet_addr(IP);
	addr.sin_port = htons(atoi(PORT)); // htons : host to net, port

	// Connect
	if (connect(sock, (struct sockaddr *)&addr, sizeof(addr)) == -1) // IP �ּҷ� ����
	{
		printf("ERROR :: 2_Connect Error\n");
		exit(1);
	}

	char buf[100];

	// Client Socket ���� ����
	// 1. interrupt �߻�
	// 2. exit �Է�
	// 3. read ���� �� ����� 0�̸� ���� ����
	while (1)
	{
		memset(buf, 0, 100);
		scanf("%s", buf);
		if (!strcmp(buf, "exit")) // exit ��û
		{
			write(sock, buf, strlen(buf));
			break;
		}
		write(sock, buf, strlen(buf)); // ��û ����
		memset(buf, 0, 100);
		int len = read(sock, buf, 99);
		if (len == 0) // ������ ����Ǹ� ��û ����
		{
			printf("INFO :: Server Disconnected\n");
			break;
		}
		printf("%s\n", buf);
	}

	// close sock
	close(sock);
	return 0;
}