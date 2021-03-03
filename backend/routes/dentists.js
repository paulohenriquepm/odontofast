const express = require('express')

const router = express.Router()

const connection = require('../config/connection')

router.get('/dentists', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  connection.query("SELECT * FROM dentists", 
    (err, result) => {
      if(err){
        response.message = 'Connection Error'
        response.status = 500,
        response.data = err
        res.send(response)  
      } else {
        response.message = 'Connected'
        response.status = 200
        response.data = result
        res.send(response)
      }
    }
  )
})

router.get('/dentists/:id', (req, res) => {
    let response = {
      status : undefined,
      data : undefined,
      message : undefined
    }

    const { id } = req.params

    connection.query(`SELECT * FROM dentists WHERE id = ?`, [id], 
      (err, result) => {
        if(err){
          response.message = 'Connection Error'
          response.status = 500,
          response.data = err
          res.send(response)  
        } else {
          response.message = 'Connected'
          response.status = 200
          response.data = result
          res.send(response)
        }  
      }
    )
})

router.delete('/dentists/:id', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  const { id } = req.params

  connection.query(`DELETE FROM dentists WHERE id = ?`, [id], 
    (err, result) => {
      if(err){
        response.message = 'Connection Error'
        response.status = 500,
        response.data = err
        res.send(response)  
      } else {
        response.message = 'Connected'
        response.status = 200
        response.data = result
        res.send(response)
      }   
    }
  )
})

router.post('/dentists', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  const { name, description, avatar } = req.body;

  const query = `INSERT INTO dentists (name, description, avatar) VALUES ("${name}", "${description}", "${avatar}")`

  connection.query(query, (err, result) => {
    if(err){
      response.message = 'Connection Error'
      response.status = 500,
      response.data = err
      res.send(response)  
    } else {
      response.message = 'Connected'
      response.status = 200
      response.data = result
      res.send(response)
    }   
  })
})

router.put('/dentists/:id', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  const { id } = req.params;

  const { name, description, avatar } = req.body;

  const query = `UPDATE dentists SET name = "${name}", description = "${description}",  avatar = "${avatar}" WHERE id = "${id}"`;

  connection.query(query, (err, result) => {
    if(err){
      response.message = 'Connection Error'
      response.status = 500,
      response.data = err
      res.send(response)  
    } else {
      response.message = 'Connected'
      response.status = 200
      response.data = result
      res.send(response)
    }   
  })
})

module.exports = router;