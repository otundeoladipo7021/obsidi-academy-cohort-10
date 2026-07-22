package com.bptn.course.day_11;

import java.util.Arrays;
import java.util.List;

public class SortStrings {
    public static void main(String[] args) {
        //Declare and initialize a list of strings using an ArrayList and the Arrays.asList method
    	List<String> strings = Arrays.asList("foo", "bar", "baz", "qux", "quux");
    	
        //Print the string without sorting
        System.out.println("Before sorting " + strings);

        // Sort the list of strings in ascending order using a lambda expression
        strings.sort((s1, s2) -> s1.compareTo(s2));

        // Print the sorted list of strings
        System.out.println("After sorting " + strings);
    }
}

