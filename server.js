const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'workers',
    password: '',
    port: 5433
})

// create new worker
app.post('/worker', (req, res) => {
    const newWorker = req.body

    const query =
        'INSERT INTO workers (name, lastname, username, type_id, id_number, profession_occupation_1, profession_occupation_2, profession_occupation_3, professional_license, email, mobile_phone, phone, address, neighborhood, city) VALUES ($1, $2, $3, $4, $5, $6, $NULL, $NULL, $NULL, $10, $11, $NULL, $13, $14, $15)'
    // TODO: create save BD to req.body
    pool.query()
})

app.get('/doctors', (req, res) => {
    pool.query('SELECT * FROM')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000. :V')
})

// name *
//     lastname *
//     username *
//     type_id *
//     id_number *
//     profession_occupation_1 *
//     profession_occupation_2
//     profession_occupation_3
//     professional_license
// email *
//     mobile_phone *
//     phone
// address *
//     neighborhood *
//     city *
