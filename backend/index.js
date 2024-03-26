import express from 'express';
import mysql from "mysql"
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
     host : "database-cloudlearnerhub.cf0qgqyekksk.us-east-1.rds.amazonaws.com",
     user:"admin",
     password:"group2lab",
     database:"database_cloudhub"
 })
//const db = mysql.createConnection({
//    host : "localhost", 
//    user:"akila_admin",
//    password:"Akilavasan",
//    database:"cloudlearnerhub"
//})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.get('/', (req, res)=>{
    res.json("hello ! this is the backend code output .....");
})

app.get("/courses" ,  (req, res)=>{
    const query = "SELECT * FROM courses"
    db.query(query , (err, data) =>{
        if(err) return res.json(err)
        return res.json(data);
    })
})
app.post('/payment', (req, res) => {
    const { courseName, price, userName, email, cardNumber, expiry, cvv } = req.body;

    // Insert payment data into the database
    const query = 'INSERT INTO payments (courseName, price, userName, email, cardNumber, expiry, cvv) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [courseName, price, userName, email, cardNumber, expiry, cvv], (err, result) => {
        if (err) {
            console.error('Error inserting payment:', err);
            res.status(500).send('Error inserting payment');
        } else {
            console.log('Payment inserted successfully');
            res.status(200).send('Payment successful');
        }
    });
});

app.listen (8080, ()=> {
    console.log("connected successfully to backend!!!")
})
