var express = require("express")
var app = express()
var http = require("http").createServer(app)
var mysql = require("mysql")

var bodyParser = require("body-parser")
var cors = require("cors")
var port = 3000;

var db = mysql.createConnection({
    host : "localhost",
    user:"root",
    database:"vue-blog",
    password: "123456",
})

db.connect((err) => {
    if(err)
    console.log("db error!")
    else
    console.log("db success!")
})

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=> {
    res.send("API")
})

app.get('/posts',(req,res)=> {
    let sql = 'select * from posts order by post_date desc'
    db.query(sql,(err,posts)=> {
        res.send(posts)
    })
})

app.post('/post-detail',(req,res)=>{
    let slug = req.body.slug;
    let sql = 'select * from posts where post_slug = ?';
    db.query(sql,[slug],(err,post)=> {
        if(err){
            res.json({
                code : 'error'
            })
        } else if(post.length > 0){
            res.send(post)
        } else {
            res.json({
                code : 'not_found_post'
            })
        }
    })
})

http.listen(port, ()=> {
    console.log(`Server running on ${port} PORT`)
})
