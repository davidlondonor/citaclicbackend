const express = require('express')
const app = express()
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'workers',
    password: '',
    port: 5433
})
