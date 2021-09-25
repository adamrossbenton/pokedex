////////////////////////////////////////
// DEPENDENCIES
////////////////////////////////////////

const express = require("express")
const methodOverride = require("method-override")
const pokedex = require('./models/pokemon')
const app = express()

////////////////////////////////////////
// PORT
////////////////////////////////////////

const PORT = 3000

////////////////////////////////////////
// MIDDLEWARE
////////////////////////////////////////



////////////////////////////////////////
// ROUTES
////////////////////////////////////////

app.get("/pokedex", (req,res) => {
    res.render("index.ejs", {pokedex: pokedex, title: "POKEDEX - Main"})
})

////////////////////////////////////////
// LISTENER
////////////////////////////////////////
app.listen(PORT,() => console.log(`Listening on ${PORT}`))