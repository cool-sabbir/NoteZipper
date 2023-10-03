require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});