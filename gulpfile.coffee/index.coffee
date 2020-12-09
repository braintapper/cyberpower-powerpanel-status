# Make sure that all gulp libs below are installed using `npm install`

'use strict'

series = require("gulp").series
parallel = require("gulp").parallel
watch = require("gulp").watch
task = require("gulp").task


sourceTask = require("./source.coffee")


task "source", sourceTask
task "default", sourceTask


task "bot", (cb)->
  watch sourceTask.watch, sourceTask

