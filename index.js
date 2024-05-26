const express = require('express');
const port = 3000;
const app = express();
const fs = require("fs")


app.get('/files/:filename', (req, res) => {
    const name = req.params.filename;
    console.log(name);
    fs.readFile(name,"utf-8",function (err, data)
    {
        res.json({
         data   
        });   
})
   
});
app.listen(port);
