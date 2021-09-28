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

app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))

////////////////////////////////////////
// ROUTES
////////////////////////////////////////

// Index
app.get("/pokedex", (req,res) => {
    res.render("index.ejs", {pokedex: pokedex, title: "POKEDEX - Main"})
})

// New
app.get("/pokedex/new", (req,res) => {
    res.render("new.ejs", {title: `POKEDEX - Add Pokemon`})
})

// Create
app.post("/pokedex", (req,res) => {
    pokedex.push(req.body)
    res.redirect("/pokedex")
})

// Show
app.get("/pokedex/:id", (req,res) => {
    res.render("show.ejs", {pkmn: pokedex[req.params.id], title: `POKEDEX - ${pokedex[req.params.id].name}`})
})

////////////////////////////////////////
// LISTENER
////////////////////////////////////////
app.listen(PORT,() => console.log(`Listening on ${PORT}`))