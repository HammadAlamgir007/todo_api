const express = require("express")
const app = express()
const users = [{
    name: "hammad",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
        } ]
}]
app.use(express.json())
app.get("/", function (req, res)
{
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.lenth
    let numberofhealthykidneys = 0
    for (let i = 0; i < johnkidneys.length; i++) {
        if (johnkidneys[i].healthy)
        {
            numberofhealthykidneys=numberofhealthykidneys+1
               }      
    }
    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        johnkidneys,
        numberofkidneys,
        numberofunhealthykidneys
    })
})
app.post("/", function (req, res)
{   
   
    const ishealthy = req.body.ishealthy
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"done!"
    })
})

app.put("/", function (req, res)
{   
    for (let i = 0; i <users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
        
    }
    res.json({});
})

app.delete("/", function (req, res)
{   
    const newkidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy)
        {
            newkidneys.push({
                healthy:true
            })
            }
    }
    users[0].kidneys = newkidneys;
    res.json({msg:"done"})
})

app.listen(3000);