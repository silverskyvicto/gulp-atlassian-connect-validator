// Import Module
const through = require('through2');
const PluginError = require('plugin-error');
const Validator = require('atlassian-connect-validator');

// Consts
const PLUGIN_NAME = 'gulp-atlassian-connect-validator';

function gulpAtlassianConnectValidator(descriptor, schema) {

  if (!descriptor) {
    throw new PluginError(PLUGIN_NAME, 'Missing atlassian-connect.json!');
  }
  
  Validator.validateDescriptor(descriptor, schema, function (errors) {
    if (errors) {
      throw new PluginError(PLUGIN_NAME, JSON.stringify(errors));
    } else {
      console.log("Success");
    }
  });
  
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }
    if (file.isStream()) {
      throw new PluginError(PLUGIN_NAME, 'Streaming not supported');
    }
    
    return cb(null, file);
  });

}

module.exports = gulpAtlassianConnectValidator;