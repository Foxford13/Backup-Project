$(() => {



  const $isPlaying = $('.current');
  let playerOnePlaying = true;
  const boardSize = 64;
  $isPlaying.text('Player 1 - Grey');


  function startingPosition () {

    for ( let i = 0; i < boardSize; i++) {
      $('.game').append($('<div>').addClass('box'));
    }
    $('.box').each(function(i) {  //////// adds numbers to each box
      $(this).text(i);
    });
    $('body').find($('.box')).eq(27).addClass('black');
    $('body').find($('.box')).eq(28).addClass('yellow');
    $('body').find($('.box')).eq(35).addClass('yellow');
    $('body').find($('.box')).eq(36).addClass('black');

  }
  startingPosition();

  const $boxes = $('.box');




  function fillBoxes(e, classToAdd, classToRemove, boxNumbers) {
    const index = $(e.target).index();
    const squaresToTurn = [];
    let i = boxNumbers;
    ///////////////////// it determines the the color  of boxes based on possible coordinates given and
    ///////////////////// puts them into an array ex. for forward  can  have 4 yellow squares ahead(+1 )
    ////////////////////    or for diaganal up     three yellows -7 while they are still there
    while ($boxes.eq(index + i).hasClass(classToRemove)) {
      squaresToTurn.push(index + i);
      i += boxNumbers;
    }
    ////////////  establishes a class of a checker after the sequence of checkers that have a class we want to
    // remove
    const lastFilledDivInASequence = squaresToTurn[squaresToTurn.length - 1] + boxNumbers;
    console.log(lastFilledDivInASequence);

    //////////// if

    if ( $boxes.eq(lastFilledDivInASequence).hasClass(classToAdd) && lastFilledDivInASequence >= 0 && lastFilledDivInASequence <= 63) {


      for (let i = 0; i < squaresToTurn.length; i++) {
        $(e.target).addClass(classToAdd);
        $('body').find($boxes).eq(squaresToTurn[i]).removeClass(classToRemove).addClass(classToAdd);

        playerOnePlaying = classToAdd === 'black' ? false : true;
        playerOnePlaying ? $isPlaying.text('Player 1 - Grey') : $isPlaying.text('Player 2 - Yellow');
      }
    }
  }

  $boxes.on('click', (e) => {
    const $indexTarget = $(e.target).index();
    console.log($(e.target).index());

    function blackPlus() {
      if (playerOnePlaying && !($indexTarget % 8 === 7)) {
        fillBoxes(e, 'black', 'yellow', +1);
        fillBoxes(e, 'black', 'yellow', +8);
        fillBoxes(e, 'black', 'yellow', +9);
        fillBoxes(e, 'black', 'yellow', +7);
      }
    }
    blackPlus();
    function blackMinus() {
      if (playerOnePlaying && !($indexTarget % 8 === 0)){
        fillBoxes(e, 'black', 'yellow', -1);
        fillBoxes(e, 'black', 'yellow', -8);
        fillBoxes(e, 'black', 'yellow', -9);
        fillBoxes(e, 'black', 'yellow', -7);
      }
    }
    blackMinus();
    function yellowPlus() {
      if (!playerOnePlaying && !($indexTarget % 8 === 7)){
        fillBoxes(e, 'yellow', 'black', +1);
        fillBoxes(e, 'yellow', 'black', +8);
        fillBoxes(e, 'yellow', 'black', +9);
        fillBoxes(e, 'yellow', 'black', +7);
      }
    }
    yellowPlus();
    function yellowMinus() {
      if (!playerOnePlaying && !($indexTarget % 8 === 0)){
        fillBoxes(e, 'yellow', 'black', -1);
        fillBoxes(e, 'yellow', 'black', -8);
        fillBoxes(e, 'yellow', 'black', -9);
        fillBoxes(e, 'yellow', 'black', -7);
      }
    }
    yellowMinus();


  });










  // function fillBoxesBlack(e, classToRemove, boxNumbers) {
  //   const index = $(e.target).index();
  //   let squaresToTurn = [];
  //   while ($boxes.eq(index + boxNumbers).hasClass(classToRemove)) {
  //     squaresToTurn.push(boxNumbers);
  //     console.log(squaresToTurn);
  //
  //   }
  // }





});
