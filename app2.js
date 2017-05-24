$(() => {
  const $isPlaying = $('.current');
  let playerOnePlaying = true;
  const boardSize = 64;
  $isPlaying.text('Player 1 - Black');
  const $scoreOne = $('.score-one');
  const $scoreTwo = $('.score-two');
  const $game = $('.game');
  let $boxes = null;

  function startingPosition () {

    for ( let i = 0; i < boardSize; i++) {
      $game.append($('<div>').addClass('box'));
    }

    $boxes = $('.box');
    // $boxes.each(function(i) {  //////// adds numbers to each box
    //   $(this).text(i);
    // });

    $boxes.eq(27).addClass('white');
    $boxes.eq(28).addClass('black');
    $boxes.eq(35).addClass('black');
    $boxes.eq(36).addClass('white');
  }

  startingPosition();

  function fillBoxes(e, classToAdd, classToRemove, boxNumber) {
    const $square = $(e.target);
    const index = $square.index();
    const squaresToTurn = [];
    let i = boxNumber;
    ///////////////////// it determines the the color  of boxes based on possible coordinates given and
    ///////////////////// puts them into an array ex. for forward  can  have 4 white squares ahead(+1 )
    ////////////////////    or for diaganal up     three whites -7 while they are still there
    ///////////////////////// they dont turn up and down when enar the borders
    let j = 8;
    let k = -8;
    if (boxNumber === 8) {     ///////////had to be done first to make side rows
      while ($boxes.eq(index + j).hasClass(classToRemove)) {
        squaresToTurn.push(index + j);
        j += 8;
      }
    } else if (boxNumber === - 8) {     ///////////had to be done first to make side rows
      while ($boxes.eq(index + k).hasClass(classToRemove)) {

        squaresToTurn.push(index + k);
        k -= 8;
      }
    }

    while ($boxes.eq(index + i).hasClass(classToRemove) && (index + i)%8 !== 7 && (index + i)%8 !== 0) {
      squaresToTurn.push(index + i);
      i += boxNumber;
    }
    ////////////  establishes a class of a checker after the sequence of checkers that have a class we want to
    // remove
    const lastFilledDivInASequence = squaresToTurn[squaresToTurn.length - 1] + boxNumber;

    if ($boxes.eq(lastFilledDivInASequence).hasClass(classToAdd) && lastFilledDivInASequence >= 0 && lastFilledDivInASequence <= 63) {
      for (let i = 0; i < squaresToTurn.length; i++) {
        $square.addClass(classToAdd);
        $('body').find($boxes).eq(squaresToTurn[i]).removeClass(classToRemove).addClass(classToAdd);
        playerOnePlaying = classToAdd === 'black' ? false : true;
        playerOnePlaying ? $isPlaying.text('Player 1 - Black') : $isPlaying.text('Player 2 - white');
      }
    }
  }


  function turn(e) {

    const classToAdd = playerOnePlaying ? 'black' : 'white';
    const classToRemove = playerOnePlaying ? 'white' : 'black';
    if ($(e.target).hasClass(classToAdd)  || $(e.target).hasClass(classToRemove)) return false;////before it was in fillBoxes function. Had to place it here so it determines if a square is empty before it runs fillBoxes. Inside fillBoxes it wasnt working properly

///originally negative and positive numbers were put separately for some reason (there was a reason though). Split them if you see a bug
    [1,9,8,7,-1,-9,-8,-7].forEach((number) => {
      fillBoxes(e, classToAdd, classToRemove, number);
    });
    $scoreOne.text( 'Player One' +' ' + $('.black').length);
    $scoreTwo.text('Player Two' +' ' + $('.white').length);
  }

  $boxes.on('click', turn);
});
