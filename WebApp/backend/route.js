const express = require("express")
const router = express.Router()
const annotemplate = require("./annotationmodel")

router.post("/annotations",(req,res) => {
    const annodata = new annotemplate({
        category:req.body.category,
        quote:req.body.quote,
        tags:req.body.tags,
        text:req.body.text
    })
    annodata.save().then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router