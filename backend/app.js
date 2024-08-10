const express = require('express');
const app = express();
const path = require('path');
const join = path.join;
const { json, urlencoded } = require('body-parser');
const Sequelize = require('sequelize');
const doctors = require('./models/doctors');
const patients = require('./models/patients');

app.use(express.static(join(__dirname, 'public')));
app.use(json());
app.use(urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
    res.send('Welcome to the Health Management System');
});

app.get('/login', (req, res) => {
    res.send('Login Page');
});

app.get('/signup', (req, res) => {
    res.send('Signup Page');
});

app.post('/signup/doctor', async (req, res) => {
    console.log(req.body);
    try {
        const newDoctor = await doctors.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        console.log('New doctor created:', newDoctor.toJSON());
        res.status(201).json({ message: 'Doctor signed up successfully' });

    } catch (error) {
        console.error('Error creating doctor:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/signup/patient', async (req, res) => {
    console.log(req.body);
    try {
        const newPatient = await patients.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        console.log('New patient created:', newPatient.toJSON());
        res.status(201).json({ message: 'Patient signed up successfully' });

    } catch (error) {
        console.error('Error creating patient:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const doctor = await doctors.findOne({ where: { email } });
        if (doctor && await doctor.comparePassword(password)) {
            // login successful, send doctor data
            res.status(200).json({ message: 'Doctor login successful', doctor });

        } else {
            const patient = await patients.findOne({ where: { email } });
            if (patient && await patient.comparePassword(password)) {
                // login successful, send patient data
                res.status(200).json({ message: 'Patient login successful', patient });

            } else {
                res.status(401).json({ error: 'Invalid email or password' });
            }
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;
