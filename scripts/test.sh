#!/bin/bash

. setenv

tsc

node --max-old-space-size=16384 --unhandled-rejections=strict built/models/user/index.js

#  . ./setenv && tsc && node --max-old-space-size=16384 --unhandled-rejections=strict  build/trades/index.js