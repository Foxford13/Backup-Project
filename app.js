$(() => {


  const $boxes = $('.box');
  const $isPlaying = $('.current');
  // let playerOnePlaying = true;




  $isPlaying.text('Player 1');


  $('.box').each(function(i) {  //////// adds numbers to each box
    $(this).text(i);
  });

  //
  // function alternateMatches(e){         ////swaps between colors and players doesnt work well
                                        //// fix it so it applies that you cant put a
  //   //
  //   //   ////// here i can add a function
  //   if(playerOnePlaying ){
  //     $(e.target).addClass('black');
  //     playerOnePlaying = false;
  //     $isPlaying.text('Player 2');
  //
  //   } else if(!playerOnePlaying){
  //     $(e.target).addClass('yellow');
  //     playerOnePlaying = true;
  //
  //     $isPlaying.text('Player 1');
  //   }
  //
  // }





  // $boxes.on('click', alternateMatches);

  $boxes.on('click', (e) => {
    let index = $(e.target).index();

    const emptyBoxes = (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')));






    while ($boxes.eq(index + 1).hasClass('black') && emptyBoxes && !($boxes.eq(index + 1).hasClass('yellow'))) {
      $(e.target).addClass('yellow');
      $('body').find($boxes).eq(index + 1).removeClass('black').addClass('yellow');
      $(e.target).addClass('yellow');
      index += 1;


    }
  });

  $boxes.on('click', (e) => {
    let index = $(e.target).index();
    const emptyBoxes = (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')));
    while ($boxes.eq(index + 1).hasClass('yellow') && emptyBoxes && !($boxes.eq(index + 1).hasClass('black'))) {
      $(e.target).addClass('black');
      $('body').find($boxes).eq(index + 1).removeClass('yellow').addClass('black');
      $(e.target).addClass('black');
      index += 1;

    }
  });
  $boxes.on('click', (e) => {
    let index = $(e.target).index();
    const emptyBoxes = (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')));

    while ($boxes.eq(index + 9).hasClass('yellow') && emptyBoxes && !($boxes.eq(index + 9).hasClass('black'))) {
      $(e.target).addClass('black');
      $('body').find($boxes).eq(index + 9).removeClass('yellow').addClass('black');
      $(e.target).addClass('black');
      index += 9;

    }
  });
  $boxes.on('click', (e) => {
    let index = $(e.target).index();
    const emptyBoxes = (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')));

    while ($boxes.eq(index + 8).hasClass('yellow') && emptyBoxes && !($boxes.eq(index + 8).hasClass('black'))) {
      $(e.target).addClass('black');
      $('body').find($boxes).eq(index + 8).removeClass('yellow').addClass('black');
      $(e.target).addClass('black');
      index += 8;

    }
  });

});
