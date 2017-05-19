$(() => {
  console.log('asasa');

  const $boxes = $('.box');
  const $isPlaying = $('.current');
  let playerOnePlaying = true;
  // var myArray = new Array();

  $isPlaying.text('Player 1');

  $('.box').each(function(i) {
    $(this).text(i);

  });

  // $boxes.each(arrayOfSquares);

  // function arrayOfSquares(index, box) {
  //   if ($(box).hasClass('black')) {
  //     myArray.push('black');
  //   }else if ($(box).hasClass('yellow')) {
  //     myArray.push('yellow');
  //   } else {
  //     myArray.push(undefined);
  //   }
  //
  // }
  // function boxAvailabilityAndFlip() {
  //   // horizontal for now
  //
  // }




  function alternateMatches(e){
    // myArray = new Array();

    ////// here i can add a function
    if(playerOnePlaying){
      $(e.target).addClass('black');
      playerOnePlaying = false;
      $isPlaying.text('Player 2');

    } else if(!playerOnePlaying){
      $(e.target).addClass('yellow');
      playerOnePlaying = true;
      console.log(playerOnePlaying);
      $isPlaying.text('Player 1');
    }
    // $boxes.each(arrayOfSquares);
    // console.log(myArray);
  }
  //remember about while loop


  $boxes.one('click', alternateMatches);

  $boxes.one('click', (e) => {
    let index = $(e.target).index();
    index += 1;
    if ($boxes.eq(index).hasClass('yellow')) {
      $('body').find($boxes).eq(index).removeClass('yellow').addClass('black');
    }



  });
  $boxes.one('click', (e) => {
    let index = $(e.target).index();
    index += 1;
    if ($boxes.eq(index).hasClass('black')) {
      $('body').find($boxes).eq(index).removeClass('black').addClass('yellow');
    }



  });





});
