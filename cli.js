#!/usr/bin/env node

var dotenv = require('dotenv-extended');
var config = dotenv.load();
var shell = Object.keys(config)
  .reduce(function(out, key) {
    return out.concat('export ' + key + '=' + config[key]);
  }, [])
  .join('\n');
console.log(shell);
