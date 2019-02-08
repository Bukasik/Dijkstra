#!/usr/bin/env node

import program from 'commander';
import shortPath from '..';
import { version } from '../../package.json';

program
  .description('Finds the shortest path algorithm Dijkstra.')
  .version(version)
  .arguments('<firstConfig>')
  .action((filePath) => {
    console.log(shortPath(filePath));
  })
.parse(process.argv);
