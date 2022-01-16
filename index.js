import randomColor from 'randomcolor';
import chalk from 'chalk';

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

console.log(
  chalk.hex(color).bold(`##############################
##############################
##############################
####                      ####
####        ${color}       ####
####                      ####
##############################
##############################
##############################
`),
);
