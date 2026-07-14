package com.bptn.course.day_07.ObjectSuperclass;

public class ObjectDemo {
	
	@Override
	public String toString() {
		return super.toString()+ ". ToString method is called";
	}
	
	public static void main(String[] args) {
		ObjectDemo obj1 = new ObjectDemo();
		System.out.println(obj1);
	}
}
