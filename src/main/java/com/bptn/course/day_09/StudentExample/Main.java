package com.bptn.course.day_09.StudentExample;

import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;

public class Main {

    public static void main(String[] args) {

        List<Student> studentList = new ArrayList<>();

        studentList.add(new Student("Student1", 80));
        studentList.add(new Student("Student2", 75));
        studentList.add(new Student("Student3", 86));
        studentList.add(new Student("Student4", 74));
        studentList.add(new Student("Student5", 92));
        studentList.add(new Student("Student6", 72));
        studentList.add(new Student("Student7", 60));

        // initialize passList
        List<Student> passList = null;
        passList = new ArrayList<Student>();
        
        Iterator<Student> it = studentList.iterator();
        while(it.hasNext()){
          Student s = it.next();
          if(s.getClassGrade() >= 75){
            passList.add(s);
          }
        }


        // Loop through studentlist to filter the students with target grade
        for(Student s : studentList){
          if(s.getClassGrade() >= 75){
            passList.add(s);
          }
        }

        // print out the students using a for-each loop.      
        for(Student s : passList){
          System.out.println(s);
        }
    }
}