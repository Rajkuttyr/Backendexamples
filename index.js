// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.post('/submit', (req, res) => {
//   res.send('Form submitted!');
// });
// app.put('/update', (req, res) => {
//   res.send('Data updated!');
// });

// app.get('/about', (req, res) => {
//     return res.json({
//         message: 'This is the about page'
//     });
// });
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:4000');
// })

const express = require('express');
const bodyParser = require('body-parser');
const path =require('path');
const logReqResonConsoleForRequestMethod = require('./middlewares/logger');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bookify")
.then(()=>{
    console.log("mongodb connected")

})
.catch(err=>{
    console.log(err)
})

const app = express(); 

const bookRouter = require('./routes/book')

app.use(bodyParser.json()); 

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
app.use("/",bookRouter);
app.set("view engine","ejs");
app.set("views",path.resolve("Views"));
// app.get("/hello.html",(req,res)=>{
//     res.sendFile(path.resolve("./static/hello.html"));
// })
app.use(express.static(path.resolve("./static")));


// app.use((req,res,next)=>{console.log("req is coming");
//     // return res.json({
//     //     message: 'This is the about page'
//     // });
//     next();
// });
// app.use((req, res, next) => {
//     console.log("Middleware is running");
//     next();
// });

// app.use(logReqResonConsoleForRequestMethod('GET'));
