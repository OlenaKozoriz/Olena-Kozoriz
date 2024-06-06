const students = [
    { name: 'Olena', age: 17, faculty: 'Electronics' },
    { name: 'Hanna', age: 18, faculty: 'Economics' },
    { name: 'Anactaciia', age: 18, faculty: 'Linguistics' },
    { name: 'Dmytro', age: 17, faculty: 'Art' }
];

for (const student of students) {
    console.log(student);
}
//Destructuring inside of the cycle
for (const { name: studentName, age: studentAge, faculty: studentFaculty } of students) {
    console.log(studentName, studentAge, studentFaculty);
}
