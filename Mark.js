let student = {
    name:prompt("Enter your name:"),
    age: Number(prompt("Enter your age:")),
    marks: prompt("Enter your marks separated by commas:").split(",").map(Number)
    
};

// Step 1: Calculate total
let total = 0;

for (let x = 0; x < student.marks.length; x++) {
    total = total + student.marks[x];
}

// Step 2: Calculate average
let average = total / student.marks.length;

// Step 3: Calculate grade
let grade;

if (average >= 90) {
    grade = "A+";
}
else if (average >= 80) {
    grade = "A";
}
else if (average >= 70) {
    grade = "B";
}
else if (average >= 60) {
    grade = "C";
}
else {
    grade = "F";
}

let status;

if (average >= 60) {
    status = "Pass";
}
else {
    status = "Fail";
}


alert(
    "Student: " + student.name +
    "\nAge: " + student.age +
    "\nTotal Marks: " + total +
    "\nAverage: " + average +
    "\nGrade: " + grade +
    "\nStatus: " + status
);