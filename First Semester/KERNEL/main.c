#include <stdio.h>
#include <stdlib.h>

struct minki{
	void (*bts)();
	void (*kfc)();
	void(*mc)(int n);
};

void bts_world()
{
	printf("BTS WORLD\n");
}

void kfc_read()
{
	printf("KFC READ\n");
}

void mc(int n)
{
	printf("X = [%d]\n", n);
}

int main()
{
	struct minki *p = (struct minki *)malloc(sizeof(struct minki));

	p->bts = &bts_world;
	p->kfc = &kfc_read;
	p->mc = &mc;

	p->bts();
	p->kfc();
	p->mc(123);
}
