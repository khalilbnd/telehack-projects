const express = require('express');

const app = express();

const configDB = require('./config');
const {ENDPOINTS} = require('./constant');

const mongoose = require('mongoose');
const { db } = require('./model/Wilaya');

const coreRouter = require('./router/CoreRouter');
const clientRouter = require('./router/ClientRouter');
const authRouter = require('./router/AuthRouter');
const subscriptionRouter = require('./router/SubscriptionsRouter');

app.use(express.json());

app.use(ENDPOINTS.CORE['MAIN'], coreRouter)
app.use(ENDPOINTS.API, clientRouter);
app.use(ENDPOINTS.AUTH['MAIN'], authRouter);
app.use(ENDPOINTS.API, subscriptionRouter );


app.get('/configStatus', (req, res) => {
    if(db.readyState === 1){
        res.status(200).json({status: 'connected'});
    }
    else{
        res.status(500).json({status: 'not connected'});
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});