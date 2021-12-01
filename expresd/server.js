const express = require ('express')
const app = express ()
const port = 300
app.listen(port, function() {
console.log (`Running server on port ${port}`)

})

app.get('/', function (request, response) {
    console.log("someone is coming!")
})