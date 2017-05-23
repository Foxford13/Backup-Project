$(() => {
  const $isPlaying = $('.current');
  let playerOnePlaying = true;
  const boardSize = 64;
  $isPlaying.text('Player 1 - Grey');
  const $scoreOne = $('.score-one');
  const $scoreTwo = $('.score-two');
  const $game = $('.game');
  let $boxes = null;

  function startingPosition () {

    for ( let i = 0; i < boardSize; i++) {
      $game.append($('<div>').addClass('box'));
    }

    $boxes = $('.box');
    $boxes.each(function(i) {  //////// adds numbers to each box
      $(this).text(i);
    });

    $boxes.eq(27).addClass('black');
    $boxes.eq(28).addClass('yellow');
    $boxes.eq(35).addClass('yellow');
    $boxes.eq(36).addClass('black');
  }


  startingPosition();


  function fillBoxes(e, classToAdd, classToRemove, boxNumber) {
    const $square = $(e.target);



    const index = $square.index();
    const squaresToTurn = [];
    let i = boxNumber;
    ///////////////////// it determines the the color  of boxes based on possible coordinates given and
    ///////////////////// puts them into an array ex. for forward  can  have 4 yellow squares ahead(+1 )
    ////////////////////    or for diaganal up     three yellows -7 while they are still there
    ///////////////////////// they dont turn up and down when enar the borders
    while ($boxes.eq(index + i).hasClass(classToRemove) && ((index + i)%8 !== 7 && (index + i)%8 !== 7)) {
      squaresToTurn.push(index + i);
      i += boxNumber;
    }

    console.log(squaresToTurn);

    ////////////  establishes a class of a checker after the sequence of checkers that have a class we want to
    // remove
    const lastFilledDivInASequence = squaresToTurn[squaresToTurn.length - 1] + boxNumber;
    //////////// if


    if ($boxes.eq(lastFilledDivInASequence).hasClass(classToAdd) && lastFilledDivInASequence >= 0 && lastFilledDivInASequence <= 63) {


      for (let i = 0; i < squaresToTurn.length; i++) {
        $square.addClass(classToAdd);
        $('body').find($boxes).eq(squaresToTurn[i]).removeClass(classToRemove).addClass(classToAdd);

        playerOnePlaying = classToAdd === 'black' ? false : true;
        playerOnePlaying ? $isPlaying.text('Player 1 - Grey') : $isPlaying.text('Player 2 - Yellow');
      }
    }


  }

  function turn(e) {

    const classToAdd = playerOnePlaying ? 'black' : 'yellow';
    const classToRemove = playerOnePlaying ? 'yellow' : 'black';
    if ($(e.target).hasClass(classToAdd)  || $(e.target).hasClass(classToRemove)) return false;////before it was in fillBoxes function. Had to place it here so it determines not to run a function fillBoxes instead of trying to run it and getting an error mid way checking of the availables square

    [1,8,9,7].forEach((number) => {
      fillBoxes(e, classToAdd, classToRemove, number);
    });

    [-1,-8,-9,-7].forEach((number) => {
      fillBoxes(e, classToAdd, classToRemove, number);
    });

    $scoreOne.text($('.black').length);
    $scoreTwo.text($('.yellow').length);
  }

  $boxes.on('click', turn);

});
