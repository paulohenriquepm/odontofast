const express = require('express')

const router = express.Router()

const connection = require('../config/connection')

router.get('/clients', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  connection.query("SELECT * FROM clients", 
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

router.get('/clients/:id', (req, res) => {
    let response = {
      status : undefined,
      data : undefined,
      message : undefined
    }

    const { id } = req.params

    connection.query(`SELECT * FROM clients WHERE id = ?`, [id], 
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

router.delete('/clients/:id', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  const { id } = req.params

  connection.query(`DELETE FROM clients WHERE id = ?`, [id], 
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

router.post('/clients', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  const { 
          name, 
          email, 
          password, 
          document, 
          address, 
          zipcode, 
          city, 
          uf, 
          phone, 
          fixed_phone,
          avatar 
        } = req.body;

  const query = `INSERT INTO clients 
                  (
                    name, 
                    email, 
                    password, 
                    document, 
                    address, 
                    zipcode, 
                    city, 
                    uf, 
                    phone, 
                    fixed_phone,
                    avatar
                  ) VALUES 
                  (
                    "${name}", 
                    "${email}", 
                    "${password}",
                    "${document}",
                    "${address}",
                    "${zipcode}",
                    "${city}",
                    "${uf}",
                    "${phone}",
                    "${fixed_phone}",
                    "${avatar}",
                  )`

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

router.put('/clients/:id', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  const { id } = req.params;

  const { 
    name, 
    email, 
    password, 
    document, 
    address, 
    zipcode, 
    city, 
    uf, 
    phone, 
    fixed_phone,
    avatar 
  } = req.body;

  const query = `UPDATE clients SET 
                  name = "${name}", 
                  email = "${email}", 
                  password = "${password}",
                  document = "${document}", 
                  address = "${address}", 
                  zipcode = "${zipcode}", 
                  city = "${city}", 
                  uf = "${uf}", 
                  phone = "${phone}", 
                  fixed_phone = "${fixed_phone}",
                  avatar = "${avatar}"
                WHERE id = "${id}"`;

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