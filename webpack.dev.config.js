const config = require('./webpack.config.js');

config.mode = 'development';
config.devtool = "source-map";

module.exports = config;