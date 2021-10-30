// Number -> Any number value from Positive, Negative, Fractional, Decimal

// var variable_name = value;

// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var user_age = 28;
console.log(user_age);

// String -> Any text value which is enclosed inside a single and double quotes 

var user_name = "Karthick Kumar";
console.log(user_name);

//Boolean -> Either true or false

var result = true;
console.log(result);

//Undefined -> Variable has been initialized but value not assigned

var input_data;
console.log(input_data);

var student_name = "karthick";
var student_rollnumber = 479855655;
var student_std = "VI";
var student_section = "A";
var stuent_score = 450;

//Object -> Set of key / Value Pair

// var variable_name = {
//   key : value,
//   key : value
// }

// key -> text value, It should contain only a-z, A-Z, underscore _

var student_information = {
  name : "karthick",
  rollnumber : 479855655,
  std : "VI",
  section : "A",
  score : 450
}
console.log(student_information);

//Object -> 4 operation = Read value, Insert new value, Edit exisiting value, Delete existing value. 

//To read value from -> object_variable_namez.key
console.log(student_information.name)
console.log(student_information.score)

//To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;
student_information.section = "B";
student_information.name = "Kumar";
console.log(student_information);

//To Insert a new Value -> object_variable_name.new_key = value;
student_information.father_name = "Rajesh";
console.log(student_information);

//To delete a existing Record -> delete object_variable_name.key
delete student_information.rollnumber;
console.log(student_information)

//Array -> It is a collection of List data (List of Data)
//Syntax of creating an Array
// var variable_name = [ value_1, value_2, .... , Value_n ];

var name_list = ["Karthick", "Kumar", "Ankit", "Harsh", "Yuvaraj"];
console.log(name_list);

var total_marks = [68, 78, 57, 34, 51, 44];
console.log(total_marks);

var student_list = [
  {
    name : "karthick",
    rollnumber : 479855655,
    std : "VI",
    section : "A",
    score : 450
  },
  {
    name : "Kumar",
    rollnumber : 479855655,
    std : "VI",
    section : "A",
    score : 450
  },
  {
    name : "Ankit",
    rollnumber : 479855655,
    std : "VI",
    section : "A",
    score : 450
  },
  {
    name : "Yuviraj",
    rollnumber : 479855655,
    std : "VI",
    section : "A",
    score : 450
  }
]

console.log(student_list)