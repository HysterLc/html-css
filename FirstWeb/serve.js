const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// 用户名和密码
const USERNAME = 'root';
const PASSWORD = '12345678';

// 配置body-parser中间件
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 提供静态文件
app.use(express.static('public'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    res.send('登录成功！');
  } else {
    res.send('登录失败：用户名或密码错误。');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});