const express = require('express');
const Person = require('../src/models/person');

const app = express();
app.use(express.json());

app.post('/persons', async (req, res) => {
    try {
        const person = await Person.create(req.body);
        res.status(201).json(person);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

app.get('/persons', async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

app.get('/persons/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (person == null) {
            return res.status(200).json(`User [${req.params.id}] does not exists!`)
        }
        res.status(200).json(person);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

app.delete('/persons/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id);
        res.status(202).json(person);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

app.patch('/persons/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new : true });
        res.status(202).json(person);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

module.exports = app