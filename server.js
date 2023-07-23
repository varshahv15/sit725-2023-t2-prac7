let express = require('express');
let app = express ();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req,res)=>{
    res.render('index.html');
});

app.get('/addingTwoNumbers', (req,res)=>{
    let number1 = req.query.Number1;
    let number2 = req.query.Number2;
    let SumOfNumbers = parseInt(number1) + parseInt(number2);
    let obj = {statusCode:200, message:'Success', data:SumOfNumbers};

    res.json(obj);
})
app.listen(port, ()=>{
    console.log('server is started');

});