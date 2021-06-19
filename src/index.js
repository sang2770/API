const express       =require("express");
const morgan        =require("morgan");
const app           =express();
const port          =3000;
const router        =require("../Router/index");
const db            =require("../Database/config.js")
// morgan
app.use(morgan('combined'));
//database
db.connect();
//middleware
app.use(express.urlencoded({
    extended:true
  }));  // với html
app.use(express.json()); // với js
// Router
router(app);

app.listen(port, ()=>{
    console.log(`App is listening at  http://localhost:${port}` )
})