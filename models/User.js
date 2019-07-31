const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// Schema 就是mongodb中的集合相当于数据库中的表
// 创建 Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true // 必须设置
  },
  email: {
    type: String,
    required: true // 必须设置
  },
  password: {
    type: String,
    required: true // 必须设置
  },
  // 头像
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now //创建时的时间
  },
})
// 参数一为Model的名字，参数二为生成Model所需要的schema,Model就像是schema所编译而成的一样
module.exports = User = mongoose.model('users',UserSchema)