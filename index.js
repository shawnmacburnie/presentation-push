#!/usr/bin/env node

'use strict';
var pwd = process.cwd(),
    workingDirString = '--git-dir=' + pwd + '/.git --work-tree=' + pwd,
    argv = process.argv,
    runTime = false,
    exec = require('child_process')
        .exec;
if (argv.length > 2) {
    if (argv[2] === 'time' && argv.length > 3) {
        runTime = true;
    } else if (argv[2] === 'change') {
        runTime = false;
    } else {
        console.log('Not a valid command');
        return;
    }
}

function pushChanges() {
    exec('git ' + workingDirString + ' add -A', function (error, stdout) {
        if (error) {
            return console.log(error);
        }
        exec('git ' + workingDirString + ' commit -m "testCommit"',
            function (error2) {
                if (error2) {
                    return console.log(error2);
                }
                exec('git ' + workingDirString + ' push', function (error3) {
                    if (error3) {
                        return console.log(error2);
                    }
                    console.log('Changes commited at: ' + new Date());
                });
            });
        // console.log(stdout);
    });
}
if (runTime) {
    setInterval(pushChanges, parseInt(argv[3]));
} else {
    console.log('doing fileChange');
}