const express=require("express")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/sum",function(req,res){
    var n1=parseInt(req.query.a)
    var n2=parseInt(req.query.b)
    var ans=n1+n2

    res.send(ans.toString())
})

app.listen(3000)