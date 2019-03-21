const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Routes
const kpiRoutes = require('./routes/kpi');
const topBottomPerformerRoutes = require('./routes/topBottomPerformer');
const reviewsTrendRoutes = require('./routes/reviewsTrend');
const reviewListroutes = require('./routes/reviewList');
const topReviewsroutes = require('./routes/topReviews');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();

});

app.use('/api/kpi', kpiRoutes);
app.use('/api/topbottomperformer', topBottomPerformerRoutes);
app.use('/api/reviewstrend', reviewsTrendRoutes);
app.use('/api/reviewlist', reviewListroutes);
app.use('/api/topReviews', topReviewsroutes);

module.exports = app;
