const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8080;

require('./models/dbseed')
app.use(cors());


app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});


// Test Get route to sync to react
app.get('/express_backend', (req, res) => {
    res.send({express: 'Backend connected to frontend'});
});

app.get('/test', (req, res) => {
    res.send({express: 'Test route works'});
});

app.get('/', (req, res) => {
    res.send({express: 'Test login'});
});



//Display port that Express server is listening on
app.listen(port, () => {
    console.log(`Server listening on port ${port}`
    )}
);

