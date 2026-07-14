package com.bptn.course.day_07.SavingsAccount;

public class SavingsAccount extends Account {   

    //declare instance variable
	private float interestRate;

    //add parameterized constructor - use super keyword to call parent constructor
	SavingsAccount(String name, float balance, float d) {
		super(name, balance);
		this.interestRate = d;
	}

    //override the toString method
	@Override
	public String toString() {
		return super.toString() + ", " + interestRate;
	}

    //override the equals method
	@Override
	public boolean equals(Object obj) {
		if(super.equals(obj) && this.interestRate == ((SavingsAccount)obj).interestRate) {
			return true;
		}
		else
			return false;
	}

    
}
