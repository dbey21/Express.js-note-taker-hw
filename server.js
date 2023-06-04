const express = require('express');
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');

// Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Host public folder
app.use(express.static(path.join(__dirname,"./public")));

// Use apiRoutes
app.use('/api', apiRoutes);

app.get("/notes", (req,res)=>{
  res.sendFile(path.join(__dirname,"public/notes.html"));
})

// app.get("/assets/css/style.css", (req,res)=>{
//   res.sendFile(path.join(__dirname,"public/assets/css/style.css"));
// })
// app.get("/assets/js/script.js", (req,res)=>{
//   res.sendFile(path.join(__dirname,"public/assets/js/script.js"));
// })

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});