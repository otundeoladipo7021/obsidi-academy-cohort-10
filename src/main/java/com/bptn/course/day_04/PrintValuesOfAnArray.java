package com.bptn.course.day_04;

public class PrintValuesOfAnArray {
	    public static void main(String[] args) {  
	        
	        int [] numbers = new int [] {10, 20, 30, 40, 50};  

	        System.out.println("At odd indexes, the elements are: ");
	

	        for(int i=1; i<numbers.length; i+=2){
	            System.out.println(numbers[i]);
	        }

	      
	}  

}
