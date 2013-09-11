grunt-commit-emoji
==================

Commit through Grunt to add random emoji to your messages.

Install

```
npm install grunt-commit-emoji --save-dev
```

Setup

```
grunt.loadNpmTasks('grunt-commit-emoji');
```

Configuration in `grunt.initConfig` isn't required.

Supported formats:

```shell
grunt commit -am foo
grunt commit -am "foo bar"
grunt commit -m foo
grunt commit -m "foo bar"
grunt commit -ma foo
grunt commit -ma "foo bar"
grunt commit --message foo
grunt commit --message "foo bar"
```

Separate modifiers, i.e: `grunt commit -a --message "foo bar"` are not supported at the moment. Mostly because Grunt will interpret that as an attempt to execute multiple tasks.