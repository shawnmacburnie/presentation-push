#!/usr/bin/env node

'use strict';
var pwd = process.cwd(),
    argv = process.argv,
    runTime = false,
    exec = require('child_process').exec;
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
if (runTime) {
    setInterval(function () {
        exec('git status',function (error, stdout){
        	if(error) {
        		return console.log(error);
        	}
        	console.log(stdout);

        });
    }, parseInt(argv[3]));
} else {
    console.log('doing fileChange');
}