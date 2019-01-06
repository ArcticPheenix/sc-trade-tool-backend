const express = require('express');
const cors = require('cors');
const getPriceTable = require('./database');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database/scdata.db');

const app = express();
const port = 4000;

app.use(cors());

app.get('/v1/pricetable', (req, res) => {
    getPriceTable(db, (d) => {
        res.contentType('json');
        res.send(d);
    });
});

app.listen(port, () => {
    console.log('SCTT Backend listening on port ${port}');
});

// db.close();