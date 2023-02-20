require('express-async-errors');
require('dotenv/config');

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require('./utils/AppError');
const uploadConfig = require("./configs/upload");

const express = require('express');
const routes = require("./routes");
const cors = require("cors");

migrationsRun();

const app = express();
app.use(cors());   

app.use(express.json());
app.use("/files", express.static(uploadConfig.UPLOAD_FOLDER))


app.use(routes);

app.use((error , request , response , next) => {
    
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            message: error.message, 
            status: "error"
        });
    }

    console.log(error)

    return response.status(500).json({
        message: 'Internal Server Error',
        stauts: "error"
    })
});

const PORT = process.env.PORT || 3333;
app.listen(PORT , () => console.log(`Server is running in port ${PORT}`));

