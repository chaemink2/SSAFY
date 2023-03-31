#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#pragma pack(1)

int main()
{
	FILE *fp = fopen("binary", "rb");
	uint8_t buf[14];
	fread(buf, 1, 14, fp);
	fclose(fp);

	union {
		uint8_t origin[14];
		struct {
			uint16_t weight;
			uint16_t passwd;
			uint16_t pay;
			uint8_t food[4];
			uint8_t beverage[4];
		};
	}data;

	memcpy(&data, buf, 14);

	printf("weight = %d kg \n", data.weight);
	printf("passwd = '%d' \n", data.passwd);
	printf("pay = %d 만원 \n", data.pay);
	printf("food = %c%c%c%c\n", data.food[3], data.food[2], data.food[1], data.food[0]);
	printf("beverage = %c%c%c%c \n", data.beverage[3], data.beverage[2], data.beverage[1], data.beverage[0]);

	return 0;
}
