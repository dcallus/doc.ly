const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient
const createRouter = require ('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('doctors');
    const doctorCollection = db.collection('appointments');
    const doctorsRouter = createRouter(doctorCollection);
    app.use('/api/doctors', doctorsRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
    console.log(`listening on port: ${this.address().port}`);
})