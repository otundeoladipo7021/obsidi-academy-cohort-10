package com.bptn.course.day_04;
public class Fibonacci {
    public static void main(String[] args) {

        int num1 = 0; int num2 = 1;
        int[] fibonacci = new int[10];
        fibonacci[0]=0;
        fibonacci[1]=1;

        for(int i=2; i<10; i++){
          fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
        }

        for(int i=0; i<10; i++){
          System.out.print(fibonacci[i]);
          if(i==9){
            continue;
          } else {
          System.out.print(", ");
          }
        }
    
    }
}