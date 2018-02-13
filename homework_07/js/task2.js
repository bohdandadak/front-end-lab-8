let Range = 5;
let Attempt = 3;
let AttemptLeft = Attempt;
let Prize = 10;
let Total = 0;
let AllPrize = 10;
let Round = 0;
let Run = 0;


if (confirm("Do you want to play a game?")) {
  while (true) {
    Round = Math.floor(Math.random() * (Range + 1));
    AttemptLeft = Attempt;
    while (AttemptLeft > 0) {
      Run = prompt('enter a number from 0 to' + Range + '\n' +
        'Attempts left:' + AttemptLeft + '\n' +
        'Total prize:' + Total + '\n' +
        'Possible prize on current attempt:' + Prize + '$');

      if (typeof Run !== 'object' && Run !== '') {
        Run = Number(Run);
      } else {
        console.log("Incorrect!");
      }

      if (!isNaN(Run) && (Run % 1 === 0) && (Run >= 0 && Run <= Range)) {
        if (Run === Round) {
          Total += Prize;
          if (confirm('Do you want to continue?')) {
            Range *= 2;
            Prize = (AllPrize *= 3);
          } else {
            break;
          }
        }
      } else {
        console.log("Incorrect!");
      }
      Prize = Math.floor(Prize / 2);
      AttemptLeft--;
    }
    console.log('Thank you for a game. Your prize is:' + Total + '$');
    if (confirm('Do you want to play again?')) {
      Prize = 10;
      Range = 5;
      Total = 0;
    } else {
      break;
    }
  }
} else {
  console.log('You did not become a millionaire');
}