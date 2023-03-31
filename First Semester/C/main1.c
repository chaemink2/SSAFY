/*
 * main.c
 *
 *  Created on: 2022. 9. 23.
 *      Author: SSAFY
 */

#include <stdio.h>
#include <string.h>

typedef struct Node {
	char str[1000];
	int num;
}Node;

Node data[1000];

int cmp(const void *a, const void *b) {
	Node * ta = (Node *)a;
	Node * tb = (Node *)b;
	return ta->num - tb->num;
}

int main() {
	FILE *fp = fopen("log.txt", "r");
	char buf[1000];
	char top3[3][1000];

	int idx = 0;
	while(fgets(buf, 1000, fp) != NULL) {

		int flag = 0;
		int find_idx = 0;

		char temp[20];
		memset(temp, NULL, 20);
		strncpy(temp, buf, 16);

		for(int i = 0; i < idx; i++) {
			if(!strcmp(data[i].str, temp)) {
				flag = 1;
				find_idx = i;
				break;
			}
		}

		if(flag == 0) {
			strcpy(data[idx].str, temp);
			data[idx].num++;
			idx++;
		}

		else {
			data[find_idx].num++;
		}
	}

	qsort(data, idx, sizeof(Node), cmp);

	for(int i = 0; i < 3; i++) {
		strcpy(top3[i], data[idx - 1 - i].str);
	}

	FILE *fp1 = fopen("log.txt", "r");

	while(fgets(buf, 1000, fp1) != NULL) {

		int flag = 0;
		char temp[20];
		memset(temp, NULL, 20);
		strncpy(temp, buf, 16);

		for(int i = 0; i < 3; i++) {
			if(!strcmp(top3[i], temp)) {
				flag = 1;
			}
		}

		if(flag == 1) {
			printf("%s", buf);
		}

	}

	fclose(fp);

	return 0;
}


