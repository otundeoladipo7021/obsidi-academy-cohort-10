package com.bptn.course.day_05;

public class SmoothieCalculator {

    public static void main(String[] args) {
        System.out.println("Welcome to the Smoothie Calculator!");

        // Define some order details
        double smoothiePrice = 5.50; // Price for one smoothie
        int numberOfSmoothiesOrdered = 3; // Number of smoothies

        // Call our custom method!
        // We're passing 'smoothiePrice' and 'numberOfSmoothiesOrdered' as "ingredients"
        // The method will give us back the 'totalOrderCost'
        double totalOrderCost = calculateTotalCost(smoothiePrice, numberOfSmoothiesOrdered);

        System.out.println("Price per smoothie: $" + smoothiePrice);
        System.out.println("Number of smoothies: " + numberOfSmoothiesOrdered);
        System.out.println("Your total order cost is: $" + totalOrderCost);

        // Let's calculate another order!
        double anotherTotal = calculateTotalCost(7.25, 2); // Different price, different quantity
        System.out.println("\nAnother order cost: $" + anotherTotal);
    }

    // Our custom method will go here!
    // --- Our Custom Method: calculateTotalCost ---
    // 'public': Anyone can use this method.
    // 'static': We can call it directly from 'main' without creating an object of SmoothieCalculator.
    // 'double': This is the type of value this method will GIVE BACK (the total cost).
    // 'calculateTotalCost': This is the name of our custom method.
    // '(double price, int quantity)': These are the "ingredients" (parameters) it needs.
    public static double calculateTotalCost(double price, int quantity) {
        // This is the "blending process" (the method's job)
        double total = price * quantity;
        return total; // This is the "finished smoothie" (the value it gives back)
    }


}