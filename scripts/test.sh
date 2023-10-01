#!/bin/bash

. setenv

tsc

node --max-old-space-size=16384 --unhandled-rejections=strict built/models/screening/index.js
