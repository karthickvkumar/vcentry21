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
  name: "karthick",
  rollnumber: 479855655,
  std: "VI",
  section: "A",
  score: 450
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


var total_marks = [68, 78, 57, 34, 51, 44];
console.log(total_marks);

var student_list = [
  {
    name: "karthick",
    rollnumber: 479855655,
    std: "VI",
    section: "A",
    score: 450
  },
  {
    name: "Kumar",
    rollnumber: 479855655,
    std: "VI",
    section: "A",
    score: 450
  },
  {
    name: "Ankit",
    rollnumber: 479855655,
    std: "VI",
    section: "A",
    score: 450
  },
  {
    name: "Yuviraj",
    rollnumber: 479855655,
    std: "VI",
    section: "A",
    score: 450
  }
]

console.log(student_list)

// Function -> Block of Code
// Syntax 
// --> Function Definition
// function function_name(){
//   // code block
// }
// function_name -> It should be a text value, It contain a-z, A-Z, 0-9, _, $

// --> Function Call / Function Invocation
// function_name();

function display_object() {
  var employee = {
    name: 'Karthick',
    age: 28,
    location: "Chennai",
    desicnation: "UI Developer"
  }

  console.log(employee)
}

// Operation in Array -> 4 Operation = Insert a new value, Read the Value, Edit the exiting value, Delete the value

var name_list = ["Karthick", "Kumar", "Ankit", "Harsh", "Yuvaraj"];

//push() - Insert a new value at the end of array record
// array_variable_name.push(value_1, value_2, ... , value_n);
name_list.push("Manoj");

//unshift() -> Insert a new value at the start of array record
name_list.unshift("Mr.ABC");

//To Read value from Array
// array_variable_name[index]
console.log(name_list[1])

//To edit a value from Array
// array_variable_name[index] = new value;
name_list[1] = "Mr.XYZ";
console.log(name_list);

//To delete an value 
// array_variable_name.splice(index, 1);
name_list.splice(6, 1)
console.log(name_list)

//Operations 
/* 
1. Arithmetic Operator -> +, -, *, /, %, ++, --
2. Assignment Operator -> =, == 
3. Comparision Operator -> <, <=, >, >=
4. Logical Operator -> &&, ||, !
*/


//Syntax - if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
Problem Statement :  To check whether the given person age is eligible for Voting in India.
1. I want to pass age(Number) as an Input value 
2. I want to evaluate whether the given age (number) is greater than 18
3. If the age is greater than 18, we can print a message -> The person is eligible for Voting.
4. If the age is less then 18, we can print a message -> The person is not eligible for Voting.
*/

function check_voting() {
  console.log(name_list);
  var value = prompt("Enter you AGE :");
  var age = parseInt(value);

  if (age >= 18) {
    console.log("The person is eligible for Voting.")
  }
  else {
    console.log("The person is not eligible for Voting.")
  }
}

//Syntax - Multipe if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else if(condition){
   // code block will execute if the condition is Truthy
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
1. Pass person age -> Number
2. idenfity -> less then 18 -> The person is Minor
2. idenfity -> greater then 18 and less than 60 -> The person is Major
3. idenfity -> greater then 60 -> The person is Super Citizen
*/

function check_person_category() {
  try {
    var value = prompt("Enter the Person AGE :");
    //var age = parseInt(value);

    if (age < 18) {
      console.log("The person is Minor");
    }
    else if (age >= 18 && age < 60) {
      console.log("The person is Major")
    }
    else {
      console.log("The person is Super Citizen");
    }
  }
  catch (error) {
    console.error(error);
    alert("Something went wrong, pls contact admin")
  }
}


/* 
Syntax - for (loop)
for(initialization;  condition; increment/decrement){ 
  //code block
}
*/

for (var count = 1; count <= 10; count++) {
  console.log("Loop is running on count", count);
}

/*
1. Find even number for given limit.
Solution: 
1. Get number (limit) value from user while running the code.
2. Logic for finding even number -> Number % 2 => 0
3. Repeat this logic till n number
*/

function print_even_numbers() {
  var value = prompt("Enter the Limit for Finding Even Numbers");
  var limit = parseInt(value);

  for (var count = 1; count <= limit; count++) {
    if (count % 2 == 0) {
      console.log("The even number is ", count)
    }
  }
}


/*Syntax - for in (loop) - Used to iterate Object properties
for(var key in object_variable_name){
 // coding
}
*/
for (var key in student_information) {
  console.log("The key of object ", key);
  console.log("The value of object ", student_information[key]);
}

/*Syntax - for of (loop) - Used to iterate list of Array
for(var value of array_variable_name){
 // coding
}
*/
var student_List = [];
for (var value of student_List) {
  console.log(value);
}

/*Syntax - While (loop)
while(condition){
 // loop code block
}
*/

var count = 1;
while (count <= 10) {
  console.log("The count is ", count);
  count++
}

/*Syntax - While (loop)
do{
 // code block      
}while(condition)
*/

var count = 1;
do {
  console.log("The count is ", count);
  count++
} while (count <= 10)

/*Syntax - Switch Case
switch(expression){
  case value :
    // code block
    break;
  case value :
    // code block
    break;
  default:
    //code block
}
*/


function find_weekday() {
  var value = prompt("Enter a number from 0 - 6")
  var day = parseInt(value);

  switch (day) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log('Out of range')
  }
}
