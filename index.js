import randomColor from 'randomcolor';

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

console.log(`##############################
##############################
##############################
####                      ####
####         ${color}       ####
####                      ####
##############################
##############################
##############################
`);
