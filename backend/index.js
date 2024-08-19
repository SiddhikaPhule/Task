require ('dotenv').config();


const express = require ("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");


const { HoldingModel } = require("./model/HoldingModel");
const { HoldingSchema } = require("./schemas/HoldingSchema");

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

const app = express(); 
app.use(cors());
app.use(bodyParser.json());
// mongoose.connect (uri, () => {

// })
// app.get('/myTask', async(req, res) => {
//     let tempEntry = [
//         {
//             name:"Abc",
//             phone:7021737200
//         },
//         {
//             name:"Pqr",
//             phone:7021737780
//         }
//     ];

//     tempEntry.forEach((item)=>{
//         let newHolding = new HoldingModel ({
//             name:item.name,
//             phone: item.phone
//         });
//         newHolding.save();
//     });
//     res.send("Data inserted");
// });

app.get('/myTask', async(req, res) => {
    let allMyTask = await HoldingModel.find({});
    res.json(allMyTask);
});

app.post('/addTask', async (req, res) => {
    const { name, phone } = req.body;

    if (!name || !phone) {
        return res.status(400).send("Name and phone are required");
    }

    try {
        const newHolding = new HoldingModel({ name, phone });
        await newHolding.save();
        res.status(200).send("Data inserted successfully");
    } catch (error) {
        res.status(500).send("Error inserting data: " + error.message);
    }
});

app.listen (PORT, () =>{
    console.log("App started !");
    mongoose.connect(uri);
    console.log("DB connected")

})