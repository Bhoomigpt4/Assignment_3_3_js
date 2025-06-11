// Initial student records
const studentRecords = {
  101: {
    name: "Bhoomi gupta",
    age: 16,
    grade: "10th",
    subjects: ["Math", "Science", "English"],
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
    },
  },
  102: {
    name: "sanvi jadhav",
    age: 15,
    grade: "9th",
    subjects: ["History", "Math", "English"],
    address: {
      city: "Delhi",
      state: "Delhi",
      pincode: "110001",
    },
  },
  103: {
    name: "priya yadav",
    age: 17,
    grade: "11th",
    subjects: ["Physics", "Chemistry", "Math"],
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400002",
    },
  },
};

// Function to add a new student
function addStudent(id, student) {
  studentRecords[id] = student;
}

// Function to update student's details
function updateStudent(id, newDetails) {
  if (studentRecords[id]) {
    Object.assign(studentRecords[id], newDetails);
  } else {
    console.log("Student not found.");
  }
}

// Function to delete a student by ID
function deleteStudent(id) {
  delete studentRecords[id];
}

// Function to list all students
function listAllStudents() {
  Object.entries(studentRecords).forEach(([id, student]) => {
    console.log('ID: ${id}', student);
  });
}

// Function to search students by city
function searchStudentsByCity(city) {
  return Object.values(studentRecords).filter(
    (student) => student.address.city === city
  );
}

// Function to get students enrolled in a particular subject
function studentsInSubject(subject) {
  const result = [];

  for (let id in studentRecords) {
    const student = studentRecords[id];

    if (student.subjects.includes(subject)) {
      result.push(student.name);
    }
  }

  return result;
}

// Function to calculate average age
function averageAge() {
  let totalAge = 0;
  let count = 0;

  for (let id in studentRecords) {
    const student = studentRecords[id];
    totalAge += student.age;
    count++;
  }

  const average = totalAge / count;
  return average;
}

// Example usage
addStudent(104, {
  name: "sejal Joshi",
  age: 15,
  grade: "10th",
  subjects: ["English", "Biology"],
  address: {
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600001",
  },
});

updateStudent(102, { age: 16 });
deleteStudent(103);
listAllStudents();
console.log("Students from Mumbai:", searchStudentsByCity("Mumbai"));
console.log("Students in Math:", studentsInSubject("Math"));
console.log("Average Age:", averageAge());
