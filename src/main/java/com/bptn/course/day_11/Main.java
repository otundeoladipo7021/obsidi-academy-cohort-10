package com.bptn.course.day_11;

public class Main {
    // Let's define our functional interfaces:
    @FunctionalInterface
    interface MyValue {
        double getValue();
    }

    @FunctionalInterface
    interface ActuallyComputeValue {
        double getValue(int x, int y);    
    }

    public static void main(String[] args) {
        // Here, we declare a reference to the MyValue functional interface. This means that our new variable num1 will have to abide by the rules set by the MyValue functional interface:
        MyValue num1;

        num1 = () -> 42;
        System.out.println("num1 currently has a value of " + num1.getValue());

        num1 = () -> 21 * 2;
        System.out.println("Now num1 has a value of " + num1.getValue());

        num1 = () -> {
            int counter = 1;
            int sum = 0;
            while (counter < 10) {
                sum = sum + counter;
                counter++; 
            }
            return sum;
        };
        System.out.println("After the loop, num1 has a value of " + num1.getValue());

        // And now for our parameterized lambdas, we create a reference to the ActuallyComputeValue functional interface. num2 will now abide by the rules set by that interface:
        ActuallyComputeValue num2;

        num2 = (x, y) -> x * y;
        System.out.println("For num2 with 5 and 20, the value is " + num2.getValue(5, 20));

        // Note that you can return whatever you want–as long as it matches the return value that the interface is expecting.
        num2 = (x, y) -> {
            if(x > 4) {
                return x;
            } else {
                return y;
            }
        };
        System.out.println("For num2 with 3 and 25, the value is " + num2.getValue(3, 25));

        // Feel free to uncomment the following line and discuss why it does or doesn't work with your class. How does the result support good Java habits? What does it tell you about lambdas?
        // System.out.println("For num2 with 7 and 12.4, the value is " + num2.getValue(7, 12.4));

    }
}

