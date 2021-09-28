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

// Destroy



// Update - is there a cleaner way to just update specific data?
app.put("/pokedex/:id", (req,res) => {
    let changePkmn = pokedex[req.params.id]
        changePkmn.name = req.body.name
        changePkmn.id = req.body.id
        changePkmn.type = req.body.type
    res.redirect("/pokedex")
})

// Create
app.post("/pokedex", (req,res) => {
    pokedex.push(req.body)
    res.redirect("/pokedex")
})

// Edit
app.get('/pokedex/:id/edit',(req,res) => {
    res.render(
        'edit.ejs', {
            pkmn: pokedex[req.params.id],
            i: req.params.id,
            title: "POKEDEX - Edit Pokemon"
        }
    )
})

// Show
app.get("/pokedex/:id", (req,res) => {
    res.render("show.ejs", {pkmn: pokedex[req.params.id], title: `POKEDEX - ${pokedex[req.params.id].name}`})
})

////////////////////////////////////////
// LISTENER
////////////////////////////////////////
app.listen(PORT,() => console.log(`Listening on ${PORT}`))