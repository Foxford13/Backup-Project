$(() => {


  const $boxes = $('.box');
  const $isPlaying = $('.current');
  let playerOnePlaying = true;
  $isPlaying.text('Player 1 - Grey');
  $('.box').each(function(i) {  //////// adds numbers to each box
    $(this).text(i);
  });

  // function fillBoxesYellow(e) {
  //   const index = $(e.target).index();
  //   let squaresToTurn = [];
  //   let i = 1;
  //   while ($boxes.eq(index + i).hasClass('yellow')) {
  //     squaresToTurn.push(index + i);
  //     console.log(squaresToTurn, 'first');
  //     i += 1;
  //     console.log($boxes.eq(squaresToTurn[squaresToTurn.length - 1] + 1));
  //   }
  //   if ( $boxes.eq(squaresToTurn[squaresToTurn.length - 1] + 1).hasClass('black')) {
  //     for (let i = 0; i < squaresToTurn.length; i++) {
  //       $(e.target).addClass('black');
  //       $('body').find($boxes).eq(squaresToTurn[i]).removeClass('yellow').addClass('black');
  //       console.log(squaresToTurn, 'second');
  //     }
  //   }
  // }
  function fillBoxes(e, classToAdd, classToRemove, boxNumbers) {
    const index = $(e.target).index();
    let squaresToTurn = [];
    let i = boxNumbers;
    while ($boxes.eq(index + i).hasClass(classToRemove)) {
      squaresToTurn.push(index + i);
      console.log(squaresToTurn, 'first');
      i += boxNumbers;
      console.log($boxes.eq(squaresToTurn[squaresToTurn.length - 1] + boxNumbers));
    }
    const lastFilledDivInASequence = squaresToTurn[squaresToTurn.length - 1] + 1;
    if ( $boxes.eq(squaresToTurn[squaresToTurn.length - 1] + boxNumbers).hasClass(classToAdd) && lastFilledDivInASequence >= 0 && lastFilledDivInASequence <= 63) {
      console.log(lastFilledDivInASequence);
      for (let i = 0; i < squaresToTurn.length; i++) {
        $(e.target).addClass(classToAdd);
        $('body').find($boxes).eq(squaresToTurn[i]).removeClass(classToRemove).addClass(classToAdd);
        console.log(squaresToTurn, 'second');
        playerOnePlaying = classToAdd === 'black' ? false : true;
        const player = playerOnePlaying ? $isPlaying.text('Player 1 - Grey') : $isPlaying.text('Player 2 - Yellow');
      }
    }
  }

  $boxes.one('click', (e) => {
    ///replacing yelow squares with black square
    // const emptyBoxes = (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')));
    // if(playerOnePlaying && (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')))){

    if(playerOnePlaying) {
      fillBoxes(e, 'black', 'yellow', +1);
      fillBoxes(e, 'black', 'yellow', -1);

      fillBoxes(e, 'black', 'yellow', +8);
      fillBoxes(e, 'black', 'yellow', -8);

      fillBoxes(e, 'black', 'yellow', +9);
      fillBoxes(e, 'black', 'yellow', -9);

      fillBoxes(e, 'black', 'yellow', +7);
      fillBoxes(e, 'black', 'yellow', -7);

    } else{

      fillBoxes(e, 'yellow', 'black', +1);
      fillBoxes(e, 'yellow', 'black', -1);

      fillBoxes(e, 'yellow', 'black', +8);
      fillBoxes(e, 'yellow', 'black', -8);

      fillBoxes(e, 'yellow', 'black', +9);
      fillBoxes(e, 'yellow', 'black', -9);

      fillBoxes(e, 'yellow', 'black', +7);
      fillBoxes(e, 'yellow', 'black', -7);

      playerOnePlaying = true;
    }
    // }else if(!playerOnePlaying && (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')))){


    //// replacing black square with yellow squar

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
