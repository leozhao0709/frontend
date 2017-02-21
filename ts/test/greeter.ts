class Student {
    fullname: string;
    constructor(public firstname, public middleInitial, public lastname) {
        this.fullname = firstname + middleInitial + lastname;
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

interface Person {
    firstname: string;
    lastname: string;
}

// var user = {firstname: "John", lastname: "Mark"}
let user = new Student("Jane", "M.", "User");
user = new Student("Lei", "", "Zhao");
document.body.innerHTML = greeter(user);
