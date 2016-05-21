'use strict';

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var baseURL = process.env.BASE_URL || 'http://localhost:1337';
var serverURL = baseURL + '/api';
var masterKey = process.env.MASTER_KEY || '';
var appId = 'climatic';

var api = new ParseServer({
  databaseURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/climatic-dev',
  cloud: __dirname + '/cloud/main.js',
  masterKey, serverURL, appId
});

var dashboard = new ParseDashboard({
  apps: [
    {
      serverURL, masterKey, appId,
      appName: 'Climatic'
    }
  ]
});

var app = express();

// Serve the Parse API on the /api URL prefix
app.use('/api', api);

// Make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

// Alias the homepage to the dashboard
app.use('/', function(req, res) {
  res.redirect(301, baseURL + '/dashboard');
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse server running on port ' + port + '.');
});

