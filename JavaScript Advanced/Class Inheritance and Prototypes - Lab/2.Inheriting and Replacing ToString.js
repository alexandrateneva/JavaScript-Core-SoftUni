function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return super.toString().substr(0, super.toString().length - 1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return super.toString().substr(0, super.toString().length - 1) + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = toStringExtension();
let Teacher = classes.Teacher;
let Person = classes.Person;
let Student = classes.Student;

let t = new Teacher('Pesho', 'pesho@gmail.com', 'JavaScript');
console.log(t.toString());
let s = new Student('Gosho', 'gosho@abv.bg', 'PHP');
console.log(s.toString());
let p = new Person('Maria', 'mimi@yahoo.com');
console.log(p.toString());