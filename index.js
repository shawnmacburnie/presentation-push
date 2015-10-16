#!/usr/bin/env node

'use strict';
var pwd = process.cwd(),
    workingDirString = '--git-dir=' + pwd + '/.git --work-tree=' + pwd,
    argv = process.argv,
    runTime = false,
    commitMessage = false,
    exec = require('child_process')
        .exec;
if (argv.length > 2) {
    if (argv[2] === 'time' && argv.length > 3) {
        if (argv.length === 4) {
            commitMessage = true;
        }
        runTime = true;
    } else if (argv[2] === 'change') {
        if (argv.length === 3) {
            commitMessage = true;
        }
        runTime = false;
    } else {
        console.log('Not a valid command');
        return;
    }
}

function pushChanges() {
    var message = '';
    if (commitMessage) {
        message = argv[argv.length - 1];
    } else {
        message = 'presentation-pusher updated repo.';
    }
    exec('git ' + workingDirString + ' add -A', function (error) {
        if (error) {
            return console.log(error);
        }
        exec('git ' + workingDirString + ' commit -m "' + message + '"',
            function (error2) {
                if (error2) {
                    return console.log('Nothing to commit.');
                }
                exec('git ' + workingDirString + ' push', function (error3) {
                    if (error3) {
                        return console.log(error2);
                    }
                    console.log('Changes commited at: ' + new Date());
                });
            });
    });
}
if (runTime) {
    setInterval(pushChanges, parseInt(argv[3]));
} else {
    console.log('File Change Feature not yet added.');
}