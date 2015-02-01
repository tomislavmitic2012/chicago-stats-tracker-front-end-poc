/*! ThinkForex LLC - v1.0.0 - 01/31/2015
 * http://www.thinkforex.com/
 * Copyright (c) 2014 Thinkforex LLC */

var connect = require('connect')
    , https = require('https')
    , http = require('http')
    , url = require('url')
    , fs = require('fs')
    , staticServe = require('serve-static')
    , routes = require('./routes')['routes']
    , serverGlobals
    , app;


serverGlobals = require('./globals_prod')['serverGlobals'];

app = connect()
    .use('/', staticServe('html/en'))
    .use('/css', staticServe(process.argv[3] === 'minified' ? 'css/min' : 'css'))
    .use('/fonts', staticServe('fonts'))
    .use('/images', staticServe('images'))
    .use('/js/app', staticServe(process.argv[3] === 'minified' ? 'js/min/app/en' : 'js/app/en'))
    .use('/js/bootstrap', staticServe(process.argv[3] === 'minified' ? 'js/min/bootstrap/en' : 'js/bootstrap/en'))
    .use('/js/content', staticServe('js/content/en'))
    .use('/js/libs', staticServe('js/libs'))
    .use('/js/models', staticServe(process.argv[3] === 'minified' ? 'js/min/models/en' : 'js/models/en'))
    .use('/js/utils', staticServe(process.argv[3] === 'minified' ? 'js/min/utils' : 'js/utils'))
    .use('/js/templates', staticServe('js/templates/en'))
    .use('/js/viewmodels', staticServe(process.argv[3] === 'minified' ? 'js/min/viewmodels' : 'js/viewmodels'))
    .use(function(req, res, next) {
        var self = this;
        if (url.parse(req.url).pathname === '/') {
            res.writeHead('301', {
                'Location': serverGlobals.portal_en
            });
            res.end();
        }
        //} else if (url.parse(req.url).pathname === '/' || routes[url.parse(req.url).pathname] == null) {
        //    res.writeHead('301', {
        //        'Location': '/login.html'
        //    });
        //    res.end();
        //}
        //next();
    });

module.exports.appen = app;