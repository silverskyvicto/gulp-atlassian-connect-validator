# gulp-atlassian-connect-validator

## About
gulp-atlassian-connect-validator is plugin to validate atlassian-connect.json in Gulp.

## Installation
To install, run `npm install` command.

```
npm install gulp-atlassian-connect-validator
```

## Usage
The usage is as follows.

1. Download schema file from [App descriptor - Jira Cloud platform Developer](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).
2. Place it anywhere.
3. Write the task in gulpfile.js as follows.
    ```javascript
    const atlassianConnectValidator = require("gulp-atlassian-connect-validator");
    const descriptor = require("<path to directory>/atlassian-connect.json");
    const schema = require("<path to directory>/<Schema file >");
    
    function atlassianConnectJsonValidate(cb) {
      atlassianConnectValidator(descriptor, schema);
      cb();
    }
    
    exports.default = atlassianConnectJsonValidate;
    ```
4. Exec Gulp task.
