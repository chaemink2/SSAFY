#include <stdio.h>
#include <string.h>
#include <stdint.h>
#include <stdlib.h>

int main(int argc, char* argv[])
{
	FILE *fp=fopen("nand.txt", "r");
	char buf[20];
	char LBA[100][20];
	int idx=0;

	while(fgets(buf, 20, fp)!=NULL)
	{
		if(buf[strlen(buf)-1]=='\n')
			buf[strlen(buf)-1]='\0';
		strcpy(LBA[idx], buf);
		idx++;
	}

	fclose(fp);

	if(argv[1][0]=='W')
	{
		FILE *fNand=fopen("nand.txt", "w");
		int address=0;	
		for(int i=0; i<strlen(argv[2]); i++)
		{
			address*=10;
			address+=argv[2][i]-'0';
		}
		
		strcpy(LBA[address], argv[3]);

		for(int i=0; i<100; i++)
		{
			fprintf(fNand, "%s\n", LBA[i]); 
		}

		fclose(fNand);
	}
	else if(argv[1][0]=='R')
	{
		FILE *fResult=fopen("result.txt", "w");
		int address=0;
		for(int i=0; i<strlen(argv[2]); i++)
		{
			address*=10;
			address+=argv[2][i]-'0';
		}

		printf("%s\n", LBA[address]);
		fprintf(fResult, "%s\n", LBA[address]);
		
		fclose(fResult);
	}

	return 0;
}
