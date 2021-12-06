const express = require ('express')
const app = express ()
const port = 300
app.listen(port, function() {
console.log (`Running server on port ${port}`)

})

app.get('/', function (request, response) {
    console.log("someone is coming!")
})


app.get('/', function (request, response) {
    console.log("Someone is coming!")
    response.send("Wont keep you waiting..")
})

app.get('/electronics', function (request, response) {
    response.send("Here will be electronic stuff")
})

app.get('/clothes', function (request, response) {
    response.send("Here will be clothes stuff")
})

app.get('/landing/:Alhaji', function (request, response) {
    response.send(`Hi there, ${request.params.username}`)
})

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

const port = 300
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})