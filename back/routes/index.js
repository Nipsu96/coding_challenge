
const express = require('express')
var router = express.Router();
const app = express()
const bodyParser = require('body-parser')

const config = require('../utils/config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

app.use(bodyParser.json())

const options = config.DATABASE_OPTIONS;

const knex = require('knex')(options);
router.get('/score', (request, response) => {
  // response.json(note)
  knex.from('highscore').select("*").orderBy('score','ASC')
    .then((rows) => {
      console.log(rows)
      response.json(rows)
    })
    .catch((err) => { console.log(err); throw err })

})

router.post('/score', (request, response) => {
  const score = request.body
  console.log(score)

console.log(note);
knex('highscore').insert(score)
  .then((id) => {
    console.log("more data inserted")
    score.id = id[0];
    response.json(score)
  })
  .catch((err) => {
     console.log(err); 
 response.status(500).json(
   {error: "database error in insert"}
 ) })
})
module.exports = router;
