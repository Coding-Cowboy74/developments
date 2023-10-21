
/* Properties
1. Name
2. Job title
3. Salary
4. Status

First create an empty array called employees

Next create an Employee constructor function with the first three attributes/properties defined at the time of instantiation and the fourth will be defualted to FULL TIME

The constructor function will have a method called PRINTEMPLOYEEFORM that will print the employee record to the display
(e. g. = "Name: Bob, Title: V School Instructor, Salary: $30000, Status: Part time")

1. Instantiate three employees

2. Override the status attribute of one of them to either "Part time" or "Contract"

3. call the PRINTEMPLOYEEFORM method for each employee 

4. Enter the generated employees into the employee array
*/


let employees = [];

function Employee(name, jobTitle, Salary, status = "Full-Time") {
    this.emppName = name;
    this.empJob = jobTitle;
    this.empSalary = Salary;
    this.empStatus = status;


    this.PrintEmployeeForm = function() {
        return "Name: " + name + "\nJob Title: " + jobTitle + "\nSalary: " + Salary + "Status: " + status;
    }

  
}

const steve = new Employee("Steven", "Full Stack Developer", "$80,000");
employees.push(steve);
console.log(steve.PrintEmployeeForm());

const billy = new Employee("Billy", "Teacher", "$40000", "Part-Time");
employees.push(billy);
console.log(billy.PrintEmployeeForm());

const Sarah = new Employee("Sarah", "Marine Biologist", "$55,000", "Contract");
employees.push(Sarah);
console.log(Sarah.PrintEmployeeForm());

//console.log(employees);       <------ testing the employees array to make sure that the data is really there