require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5006;

mongoose.connect(process.env.DB_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log(err));


app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})