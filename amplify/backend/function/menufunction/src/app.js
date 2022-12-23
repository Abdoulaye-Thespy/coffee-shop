/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/menu/:category', async function(req, res) {
  let mycategory = req.params['category']
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mycategory}`, { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
 })
  .then(function (response) {
    console.log(response.data.meals);
    let menu = response.data.meals;
    res.json(menu);
  })
  .catch(function (err){
    res.json({err});
  })
});

app.get('/menu/detail/:id', async function(req, res) {
  let myid = req.params['id']
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${myid}`, { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
 })
  .then(function (response) {
    res.json(response.data.meals);
  })
  .catch(function (err){
    res.json({err});
  })
});

app.get('/menu/area/:area', async function(req, res) {
  let area = req.params['area']
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`, { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
 })
  .then(function (response) {
    res.json(response.data.meals);
  })
  .catch(function (err){
    res.json({err});
  })
});




app.get('/menu/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/menu', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/menu/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/menu', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/menu/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/menu', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/menu/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
