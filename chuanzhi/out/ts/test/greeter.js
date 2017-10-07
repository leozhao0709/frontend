var Student = (function () {
    function Student(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullname = firstname + middleInitial + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
// var user = {firstname: "John", lastname: "Mark"}
var user = new Student("Jane", "M.", "User");
user = new Student("Lei", "", "Zhao");
document.body.innerHTML = greeter(user);
