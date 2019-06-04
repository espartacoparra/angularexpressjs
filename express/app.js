const express = require('express');
const app = express();
const cors=require('cors');
const logger=require('morgan');
const usuarios=require('./models/usuarios');
const bodyParser=require('body-parser');
//sets
app.set('port',3000);
//midelware
app.use(logger('dev'))
app.use(cors());
app.use(bodyParser.json());
//routes
app.get("/usuarios",(req,res)=>{
  usuarios.getAllUsers((result)=>{
    res.json(result);
   }); 
})
app.post('/usuarios',(req,res)=>{
    var body=req.body;
    if(body.gender == "f"){
        body.gender="Femenino";
    }else{
        body.gender="Masculino"
    }
    usuarios.createUser(body,(result)=>{
        console.log(body);
        res.json('ok');
    });
    
});
app.delete('/usuarios/:id',(req,res)=>{
    var id=req.params.id;
   usuarios.removeUser(id,(result)=>{
        console.log(result);
        res.json('ok');
        console.log(id);
    });

});
//..........
app.listen(app.get('port'),()=>{
    console.log('express corriendo en el puerto :'+app.get('port'));
    
})