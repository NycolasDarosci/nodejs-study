const { model, Schema } = require("mongoose");

const personSchema = Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const Person = model("Person", personSchema);

module.exports = Person;