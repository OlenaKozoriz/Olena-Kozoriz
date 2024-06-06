const person = {
    firstName: 'Olena',
    lastName: 'Kozoriz',
    age: 18
};

(person.email = '123@ukr.net'), delete person.age;

console.log(person);
