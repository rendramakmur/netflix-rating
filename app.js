const express = require('express');
const session = require('express-session')
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes');



app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // kalo http baru true
  }))
app.use(router);

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})