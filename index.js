const express = require('express')
const app = express()

require(`dotenv`).config()

function returnCapitalized(string){
    return string.charAt(0).toUpperCase() +string.slice(1)
}
app.get('/', (req, res)=>{
    res.send (`
    <body style="margin:0;">
        <div style ="border: 1px solid black; height: 10vh; background-color: white">
        <h2 style="text-align: center;"> Hello webpage</h2>
        </div>
        <h1>White page?</h1>
        </body>
    `)
})

app.get('/:color', (req, res)=>{
    let myColor = req.params.color
    let colorName = returnCapitalized(myColor)
    res.send (`
    <body style="margin:0;">
        <div style ="border: 1px solid black; height: 10vh; background-color: ${myColor};">
        <h2 style="text-align: center;"> Hello webpage</h2>
        </div>
        <h1 style="color:${myColor}">${colorName} page</h1>
        </body>
    `)
})

// app.use('/more', require('./controllers/more'))

// app.get('/crimson', (req, res)=>{
//     res.send (`
//     <body style="margin:0;">
//         <div style ="border: 1px solid black; height: 10vh; background-color: crimson;">
//         <h2 style="text-align: center;"> Hello webpage</h2>
//         </div>
//         <h1 style="color:crimson";>Crimson page??</h1>
//         </body>
//     `)
// })

//We use this to get the remaining paths since it's the last in the file it will produce a path not found.
app.get('*', (req,res)=>{
    res.send("This is a 404 error")
})


app.listen(process.env.PORT)