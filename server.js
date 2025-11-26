const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/search', (req, res) => {
    const v1 = req.query.value1;
    const v2 = req.query.value2;
    res.render('get_result', { v1, v2 });
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
