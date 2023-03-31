#include<stdio.h>
#include<ncurses.h>
#include<locale.h>
#include<unistd.h>
#include<pthread.h>
#include<stdlib.h>
#include<time.h>

#define N 10



char map[N][N + 1] = {
	"##########",
	"#     ^  #",
	"#^###    #",
	"# #  ^  a#",
	"#      ###",
	"# ### ^  #",
	"#  a#    #",
	"# ^      #",
	"#  ^    Y#",
	"##########",
};

int ny = 1;
int nx = 1;

int my = 4;
int mx = 2;

int dy[] = {0,0,1,-1};
int dx[] = {1,-1,0,0};

int hp = 100;
//int state = 0;

//pthread_mutex_t mlock;

void* move_monster()
{
	while(1)
	{
		int idx = rand() % 4;
		int mmy = my + dy[idx], mmx = mx + dx[idx];
		if(map[mmy][mmx] == '#') continue;
		else {
			my = mmy;
			mx = mmx;
		}
		usleep(500 * 1000);
	}	 
}


void print()
{
 //	pthread_mutex_lock(&mlock);
	clear();
	for (int y = 0; y < N; y++)
	{
		for (int x = 0; x < N; x++)
		{
		 	if (y==ny && x==nx) printw("⛵ ");
			if (y == my && x == mx) printw("⛈ ");
			else if (map[y][x] == '#') printw("▒▒▒");
			else if (map[y][x] == '^') printw("^^ ");
			else if (map[y][x] == 'Y') printw("YY ");
			else if (map[y][x] == 'a') printw("aa ");
			else if (map[y][x] == ' ') printw("   ");
		}
		printw("\n");
	}
	printw("HP : %d\n", hp);
	refresh();

//	pthread_mutex_unlock(&mlock);
}

int main()
{
 	setlocale(LC_CTYPE, "ko_KR.utf8");
	initscr();
	
	srand(time(NULL));	
//	pthread_mutex_init(&mlock,NULL);
	pthread_t tid;
	pthread_create(&tid, NULL, move_monster, NULL);

	nodelay(stdscr, TRUE);
	keypad(stdscr, TRUE);
	while(1)
	{
//	 	pthread_mutex_lock(&mlock);
	 	print();
		int ch = getch();
		if (ch == ERR) ch = 0;

		if (ch == KEY_LEFT)
		{
		 	if (map[ny][nx-1] != '#')nx--;
		}
		if (ch == KEY_RIGHT)
		{
			if (map[ny][nx+1] != '#')nx++;
		}
		if (ch == KEY_UP)
		{
			if (map[ny-1][nx] != '#')ny--;
		}
		if (ch == KEY_DOWN)
		{
			if (map[ny+1][nx] != '#')ny++;
		}
		if (map[ny][nx] == '^' && ch != 0 )
		{
			hp = hp - 10;
		}
		if ((ny == my && nx == mx) || hp == 0)
		{
			usleep(500 * 1000);
			clear();
			mvprintw(10,30,"GAME OVER");
			refresh();
			sleep(1);
			break;
		}
		if (map[ny][nx] == 'Y')
		{
			usleep(500 * 1000);
			clear();
			mvprintw(10,30,"WIN (%d)", hp);
			refresh();
			sleep(1);
			break;
		}
		if (map[ny][nx] == 'a')
		{
			hp = 100;
			map[ny][nx] = ' ';
		}
//		pthread_mutex_unlock(&mlock);
	}

	pthread_join(tid,NULL);

//	getch();
	endwin();

	return 0;
}
