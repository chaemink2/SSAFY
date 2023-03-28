#include <stdio.h>
#include <string.h>

void cmd_write(char index[], char hex_num[]) {
	
 	// ./ssd W 3 0x12341234
	char space[2] = " ";
	char cmd_line[100] = "./ssd W ";
	strcat(cmd_line, index);   //strcat(char [], char []);
	strcat(cmd_line, space);
	strcat(cmd_line, hex_num);
	
	system(cmd_line); // system("echo Hello");
}

void cmd_read(char index[]) {

	char cmd_line[100] = "./ssd R ";
	strcat(cmd_line, index);
			
	system(cmd_line);
}

int main()
{
	char space[2] = " ";

	while(1)
	{
		printf("ssd > ");

		char cmd[100]; // string
		scanf("%s", cmd);  // scanf("param type", param address);

		if (!strcmp(cmd, "write")) {
			char index[10];
			char hex_num[20];
			scanf("%s", index);
			scanf("%s", hex_num);

			cmd_write(index, hex_num);
			system("echo write completed");
		}
		else if (!strcmp(cmd, "read")) {
			char index[10];
			scanf("%s", index);

			cmd_read(index);
			system("echo read completed");
		}
		else if (!strcmp(cmd, "exit")){
		 	system("echo exit completed");
			break;
		}
		else if (!strcmp(cmd, "help")){
			system("echo help completed");
		}
		else if (!strcmp(cmd, "fullwrite")){
			char hex_num[20];
			scanf("%s", hex_num);

			for (int i = 0; i < 100; i++){
				char index[10];
				sprintf(index, "%d", i); // sprintf(char [], "type", int);
				cmd_write(index, hex_num);
			}
			system("echo fullwrite completed");
		}
		else if (!strcmp(cmd, "fullread")){
			for (int i = 0; i < 100; i++){
				char index[10];
				sprintf(index, "%d", i);
				cmd_read(index);
			}
			system("echo fullread completed");
		}
		else{
			system("echo command misunderstanding");
		}
	}

	return 0;
}
