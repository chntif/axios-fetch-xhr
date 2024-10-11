const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // 引入 cors 中间件

const app = express();
const PORT = 3000;

// 使用 cors 中间件
app.use(cors()); // 启用跨域请求

// 使用 body-parser 中间件来解析 JSON 请求体
app.use(bodyParser.json());

// 内存中存储任务列表（模拟数据库）
let tasks = [
    '吃饭',
    '打游戏',
    '睡觉'
];

// GET 接口：获取所有任务
app.get('/list', (req, res) => {
    res.json(tasks);
});

// POST 接口：添加一个任务
app.post('/add', (req, res) => {
    const task = req.body.task;
    if (task) {
        tasks.push(task);
        res.status(201).json({ message: 'Task added successfully!', task });
    } else {
        res.status(400).json({ message: 'Task content is required.' });
    }
});

// 启动服务器
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
