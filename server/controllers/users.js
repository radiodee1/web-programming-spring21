//

const { request } = require("express");
const express = require("express");

const model = require('../models/users');

const app = express.Router();

app
    .get('/', (req, res) => res.send(model.GetAll()))

    .get('/:user_id', (req, res) => res.send(model.Get(req.params.user_id)))
    .post('/', (req, res) => res.send(model.Add(  {
        firstname: req.query.firstname,
        lastname: req.query.lastname,
        handle: req.query.handle,
        pic: req.query.pic
    }  )))
    .patch('/', (req, res) => res.send(model.Update(
        req.params.user_id,
        {
            firstname: req.query.firstname,
            lastname: req.query.lastname,
            handle: req.query.handle,
            pic: req.query.handle
        }
    )))
    .delete('/', (req, res) => res.send(model.GetAll()))

module.exports = app;