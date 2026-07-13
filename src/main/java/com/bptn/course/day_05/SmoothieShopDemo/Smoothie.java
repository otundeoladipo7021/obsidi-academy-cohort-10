package com.bptn.course.day_05.SmoothieShopDemo;

//Our "Smoothie recipe" (the Class)
class Smoothie {
 // These are the "ingredients" (fields/data) that every Smoothie will have
 String name;
 String mainFruit;
 boolean hasProteinPowder;
 double volumeInOunces;

 // This is how we "make" a new Smoothie from the recipe (the constructor)
 // It tells us what information we need to provide when creating a Smoothie
 public Smoothie(String nameOfSmoothie, String fruit, boolean protein, double volume) {
     this.name = nameOfSmoothie;
     this.mainFruit = fruit;
     this.hasProteinPowder = protein;
     this.volumeInOunces = volume;
 }

 // This is something a Smoothie "knows how to do" (a method)
 // It describes how to "drink" the smoothie
 public void drink() {
     System.out.println("Sip sip! Enjoying the " + name + " " + mainFruit + " smoothie!");
     if (hasProteinPowder) {
         System.out.println("Feeling strong with that protein boost!");
     } else {
         System.out.println("A refreshing treat!");
     }
 }

 // Another thing a Smoothie "knows how to do" (a method)
 // It describes how to "describe" itself
 public void describe() {
     String proteinStatus = hasProteinPowder ? "with protein powder" : "without protein powder";
     System.out.println("This is a " + name + " smoothie. Its main ingredient is " + mainFruit + " and it has " + volumeInOunces + " oz, " + proteinStatus + ".");
 }
}