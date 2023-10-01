#!/bin/bash

. setenv

tsc

node --max-old-space-size=16384 --unhandled-rejections=strict build/models/user/index.js
