$(() => {


  const $boxes = $('.box');

  $('.box').each(function(i) {  //////// adds numbers to each box
    $(this).text(i);
  });

  function fillBoxesYellow(e) {
    const index = $(e.target).index();
    let squaresToTurn = [];
    let i = 1;
    while ($boxes.eq(index - i).hasClass('yellow') && $boxes.eq(index - i - i).hasClass('black')) {
      $(e.target).addClass('black');
  $('body').find($boxes).eq(index - i).removeClass('yellow').addClass('black');
      squaresToTurn.push(index - i);
      console.log(squaresToTurn);
      i += 1
    }
  }
  // function fillBoxesBlack(e, classToRemove, boxNumbers) {
  //   const index = $(e.target).index();
  //   let squaresToTurn = [];
  //   while ($boxes.eq(index + boxNumbers).hasClass(classToRemove)) {
  //     squaresToTurn.push(boxNumbers);
  //     console.log(squaresToTurn);
  //
  //   }
  // }


  $boxes.on('click', (e) => {
    ///replacing yelow squares with black square
    // const emptyBoxes = (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')));
    // if(playerOnePlaying && (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')))){


    fillBoxesYellow(e);
    // fillBoxesYellow(e, 'yellow', -1);

    // fillBoxesYellow(e, 'yellow', +8);
    // fillBoxesYellow(e, 'yellow', -8);
    //
    // fillBoxesYellow(e, 'yellow', +9);
    // fillBoxesYellow(e, 'yellow', -9);
    //
    // fillBoxesYellow(e, 'yellow', +7);
    // fillBoxesYellow(e, 'yellow', -7);


    // fillBoxesBlack(e,  'black', +1);
    // fillBoxesBlack(e,  'black', -1);
    //
    // fillBoxesBlack(e,  'black', +8);
    // fillBoxesBlack(e,  'black', -8);
    // fillBoxesBlack(e,  'black', +9);
    // fillBoxesBlack(e,  'black', -9);
    //
    // fillBoxesBlack(e,  'black', +7);
    // fillBoxesBlack(e,  'black', -7);
  });


});
