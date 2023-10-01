#!/bin/bash

. setenv 

tsc

node build/index.js
