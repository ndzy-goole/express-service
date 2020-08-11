// 加载模块
import path from 'path'
import nedb from 'nedb'

const data = path.resolve(__dirname, '../data.db');

// 实例化连接对象（不带参数默认为内存数据库）
const db = new nedb({
  filename: data,
  autoload: true
});
export default db
