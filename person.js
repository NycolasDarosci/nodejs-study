class Person {
    name

    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `hello my name is ${this.name}`;
    }
}

module.exports = {
    Person,
}