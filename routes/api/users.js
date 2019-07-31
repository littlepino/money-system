// 登录和注册

const express = require('express')
const router = express.Router();

// $route GET 请求 路径： api/users/test
// 描述 返回请求的json数据
// 类型，公开的接口 
router.get('/test',(req,res)=> {
  res.json({msg: 'login works'})
})

module.exports = router
