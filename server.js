const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'landing.html'));
});
app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
app.get('/landing.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'landing.html'));
});
app.get('/main.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'));
});
app.get('/watch.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'watch.html'));
});


app.listen(3000, () => console.log('Server running on http://localhost:3000'));
