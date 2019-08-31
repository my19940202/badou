/**
 * xishengbo
 * express 入口文件
 */

const express = require('express');
const path = require('path');
const app = express();
const port = 8822;
app.use(express.static(path.join(__dirname, 'build')));
app.use((req, res) => {
    res.status(404).redirect('/');
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`server is listening on port ${port}!`));
