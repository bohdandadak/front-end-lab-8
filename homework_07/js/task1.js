let N = +prompt('Enter N floors', '7')

if (N <= 0 || N > 20) {
  console.log('Incorrect!');
}
for (var i = 0; i < N; i++) {
  var row = '';
  for (var j = 0; j <= (N - i); j++) {
    row += '   ';
  }
  for (var k = 1; k <= (2 * i + 1); k++) {
    row += '[~]';
  }
  console.log(row);
}