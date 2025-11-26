const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.render('get_result', { query });
});

app.post('/submit', (req, res) => {
    const text = req.body.text;
    res.render('post_result', { text });
});

app.get('/api/data', (req, res) => {
    res.json({ title: '서버 데이터', timestamp: Date.now() });
});

app.post('/api/save', (req, res) => {
    const text = req.body.text;
    res.json({ success: true, received: text });
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
