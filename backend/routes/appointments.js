const express = require('express')

const router = express.Router()

const connection = require('../config/connection')

router.get('/appointments', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  connection.query(`SELECT 
                    * 
                    FROM appointments a
                      INNER JOIN clients c
                        ON a.client_id = c.id
                      INNER JOIN dentists d
                        ON a.dentist_id = d.id
                    `, 
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

router.get('/appointments/:id', (req, res) => {
    let response = {
      status : undefined,
      data : undefined,
      message : undefined
    }

    const { id } = req.params

    connection.query(`
                      SELECT 
                        * 
                      FROM appointments a
                      INNER JOIN clients c
                        ON a.client_id = c.id
                      INNER JOIN dentists d
                        ON a.dentist_id = d.id
                      WHERE id = ?`, [id], 
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

router.delete('/appointments/:id', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  const { id } = req.params

  connection.query(`DELETE FROM appointments WHERE id = ?`, [id], 
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

router.post('/appointments', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  const { 
          client_id, 
          dentist_id, 
          hour, 
          date, 
          is_aproved
        } = req.body;

  const query = `INSERT INTO appointments 
                  (
                    client_id, 
                    dentist_id, 
                    hour, 
                    document, 
                    date, 
                    is_aproved, 
                    city, 
                    uf, 
                    phone, 
                    fixed_phone,
                    avatar
                  ) VALUES 
                  (
                    "${client_id}", 
                    "${dentist_id}", 
                    "${hour}",
                    "${document}",
                    "${date}",
                    "${is_aproved}"
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

router.put('/appointments/:id', (req, res) => {
  let response = {
    status : undefined,
    data : undefined,
    message : undefined
  }

  const { id } = req.params;

  const { 
    hour, 
    date,
    is_aproved 
  } = req.body;

  const query = `UPDATE appointments SET 
                  hour = "${hour}", 
                  date = "${date}", 
                  is_aproved = "${is_aproved}"
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