var persons = [
    {
        name: "Aaron",
        age: 99,
        occupation: "TypeScript Developer",
    },
    {
        name: "Alex",
        age: 98,
        role: "System Administrator",
    },
];
// fix the error showing in the following code:
function logPerson(person) {
    var additionalInformation;
    if ("role" in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
persons.forEach(logPerson);
