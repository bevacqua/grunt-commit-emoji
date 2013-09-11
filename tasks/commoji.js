'use strict';

var _ = require('lodash');
var emoji = require('emoji-random');
var spawn = require('child_process').spawn;

module.exports = function(grunt){
    grunt.registerTask('commit', function(){
        var done = this.async();
        var argv = _.toArray(process.argv);
        var args = _.rest(argv, 2); // omit 'node', and 'grunt'
        var index;

        _.find(args, function(arg){
            index = arg.search(/^-[a-z]*m[a-z]*|--message$/i);

            return index !== -1;
        });

        if (index === -1) {
            grunt.fail.warn('commit message argument not found, can\'t place emoji.');
        }

        var mi = index + 2;
        var m = args[mi].trim() + ' ' + emoji.random();

        args.splice(mi, 2, m);

        var git = spawn('git', args, { stdio: 'inherit' });
        git.on('close', done);
    });
};