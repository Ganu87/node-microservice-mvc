const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Ajv = require('ajv');
const ajvFormats = require('ajv-formats');
const errorHandler = require('../util/globalErrorHandler');


const app = express();
const PORT = process.env.PORT || 3005;

const userRoutes = require('./routes/userRoutes');

// const ajv = new Ajv({allErrors : true,static:false});
// ajvFormats(ajv);

// // Register Custom Email Validator
// ajv.addFormat("customEmail", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

// app.setValidatorCompiler(({ schema }) => ajv.compile(schema));

app.use(cors());
app.use(bodyParser.json());

app.use('/user',userRoutes);

app.use(errorHandler);

app.listen(PORT,()=>{console.log(`User server is running on port ${PORT}`)});