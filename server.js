//  引入 express
const express = require('express')
const app = express();
// mongoose 方便管理和连接 MongoDB数据库
const mongoose = require('mongoose')

// 引入users.js
const users = require('./routes/api/users')

// 引入数据库DB
const db = require('./config/keys').mongoURI

// 连接到mongodb
// .then是连接成功后的行为 .catch是错误发生的时候打印这个错误
mongoose.connect(db)
        .then(() => console.log('MongoDB Connected'))
        .catch((err)=>console.log(err))

// 使用 routes
app.use('/api/users',users)

// 端口号 
// process.env.PORT 如果设置当前端口号，就以当前的端口号为端口，如果没有，默认以本地的5000端口号 
const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
  res.end('hello world')
})

app.listen(port,()=>{
  console.log(`Server is running port ${port}`)
})