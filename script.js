let perc = prompt('Please enter your percentage');

if (perc >= 90 && perc < 101) {
  console.log('A1 Grade.');
} else if (perc >= 80 && perc < 90) {
  console.log('A Grade.');
} else if (perc >= 70 && perc < 80) {
  console.log('B Grade.');
} else if (perc >= 60 && perc < 70) {
  console.log('C Grade.');
} else if (perc >= 50 && perc < 60) {
  console.log('D Grade.');
} else if (perc >= 40 && perc < 50) {
  console.log('E Grade.');
} else if (perc < 40) {
  console.log('Fail');
} else {
  console.log('Please enter a valid percentage');
}
