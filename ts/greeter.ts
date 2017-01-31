class Student {
    fullname: string;
    constructor(public firstname, public middleInitial,public lastname) {
        this.fullname = firstname + middleInitial + lastname;
    }
}

function greeter(person:Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

interface Person{
    firstname: string;
    lastname: string;
}

// var user = {firstname: "John", lastname: "Mark"}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
