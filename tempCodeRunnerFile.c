#include<stdlib.h>
#include<stdio.h>
struct threenum
{
  int n1;
  int n2;
  int n3;
};
int main()
{
  int n;
  struct threenum num;
  FILE *fptr;

   fptr=fopen("D:\\num.bin","wb");
  if(fptr==NULL)
  {
  	printf("Error!opening file");
  	exit(1);
  }
  for(n=1;n<5;++n)
  {
  	num.n1=n;
  	num.n2=5*n;
  	num.n3=5*n+1;
  	fwrite(&num,sizeof(num),1,fptr);
  }
  fclose(fptr);
  return 0;
}
