const express = require('express');
const model = require('../models/users');

const { LoginRequired } = require('./security');

const app = express.Router();

    app
        .get('/', LoginRequired, (req, res)=>{
            res.send( model.GetAll() );
            console.log(req.headers);            
        }  )
        .get('/:user_id', LoginRequired, (req, res)=> res.send( model.Get(req.params.user_id) ))
        .post('/', LoginRequired, (req, res)=> { 
            res.send( model.Add({
                firstName: req.body.firstName,
                lastName:  req.body.lastName,
                handle: req.body.handle,
                pic:  req.body.pic,
            }) );
            console.log(req.headers);
            console.log(req.body);
        })
        .post('/login', (req, res) => {
            model.Register(req.body)
            .then(user=> res.send(user))
            //res.send(model.Login(req.body.handle, req.body.password));
        })
        
        .post('/register', (req, res) => {
            res.send(model.Login(req.body.handle, req.body.password));
        })
        .patch('/:user_id',LoginRequired, (req, res)=> res.send( model.Update(
            req.params.user_id,
            {
                firstName: req.body.firstName,
                lastName:  req.body.lastName,
                handle: req.body.handle,
                pic:  req.body.pic,
        }) ) )
        .delete('/:user_id', LoginRequired, (req, res)=> res.send( model.Delete(req.params.user_id) ) )


module.exports = app;