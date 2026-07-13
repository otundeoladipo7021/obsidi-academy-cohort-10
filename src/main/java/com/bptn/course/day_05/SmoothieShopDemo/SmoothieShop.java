package com.bptn.course.day_05.SmoothieShopDemo;

public class SmoothieShop {
    public static void main(String[] args) {
        // Here, we're using our "Smoothie recipe" (the Class)
        // to "make" actual Smoothies (the Objects)!

        // Making our first Smoothie object: The "Tropical Dream"
        Smoothie tropicalDream = new Smoothie("Tropical Dream", "Pineapple", false, 16.0);

        // Making our second Smoothie object: The "Berry Blast"
        Smoothie berryBlast = new Smoothie("Berry Blast", "Blueberry", true, 20.0);

        // Making our third Smoothie object: The "Green Machine"
        Smoothie greenMachine = new Smoothie("Green Machine", "Spinach", true, 12.0);

        // Now that we have our actual Smoothie objects, we can
        // ask them to "do things" or "tell us about themselves"
        // using their methods!

        System.out.println("--- Our Smoothie Menu ---");
        tropicalDream.describe(); // Ask the Tropical Dream to describe itself
        berryBlast.describe();    // Ask the Berry Blast to describe itself
        greenMachine.describe();  // Ask the Green Machine to describe itself
        System.out.println("-------------------------");

        System.out.println("\nTime to drink!");
        tropicalDream.drink(); // Ask the Tropical Dream to be drunk!
        berryBlast.drink();    // Ask the Berry Blast to be drunk!
    }
}

