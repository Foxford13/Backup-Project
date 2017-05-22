$(() => {


  const $boxes = $('.box');
  const $isPlaying = $('.current');
  let playerOnePlaying = true;

  $isPlaying.text('Player 1');


  $('.box').each(function(i) {  //////// adds numbers to each box
    $(this).text(i);
  });

  function fillBoxes(e, classToAdd, classToRemove, boxNumbers) {
    let index = $(e.target).index();


    /////////////////////////// which boxes to target. Direction depends on number put in the function fillBoxes

    const crazyBoxes =  ($boxes.eq(index + boxNumbers).hasClass(classToAdd)) ||($boxes.eq(index + boxNumbers + boxNumbers).hasClass(classToAdd)) ||  ($boxes.eq(index + boxNumbers + boxNumbers + boxNumbers).hasClass(classToAdd)) ||  ($boxes.eq(index + boxNumbers + boxNumbers + boxNumbers + boxNumbers).hasClass(classToAdd)) || ($boxes.eq(index + boxNumbers + boxNumbers + boxNumbers + boxNumbers + boxNumbers).hasClass(classToAdd)) || ($boxes.eq(index + boxNumbers + boxNumbers + boxNumbers + boxNumbers + boxNumbers + boxNumbers).hasClass(classToAdd));

    ///// a crazy ass bolean which i think will screw me over eventually (next )
    let squaresToTurn = [];
    while ($boxes.eq(index + boxNumbers).hasClass(classToRemove) && crazyBoxes && crazyBoxes >= 0 && crazyBoxes <= 63) {
      $(e.target).addClass(classToAdd);
      $('body').find($boxes).eq(index + boxNumbers).removeClass(classToRemove).addClass(classToAdd);

      index += boxNumbers;
      playerOnePlaying = classToAdd === 'black' ? false : true;
      const player = playerOnePlaying ? $isPlaying.text('Player 1 - Grey') : $isPlaying.text('Player 2 - Yellow');
      $isPlaying.text(player);
      squaresToTurn.push(crazyBoxes);
      console.log(squaresToTurn);

    }

  }






  $boxes.on('click', (e) => {
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










































  // function alternateMatches(e){         ////swaps between colors and players doesnt work well
  // // fix it so it applies
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

  // $boxes.on('click', (e) => {
  //   let index = $(e.target).index();
  //
  //   const emptyBoxes = (!($(e.target).hasClass('yellow')) && !($(e.target).hasClass('black')));
  //   while ($boxes.eq(index + 1).hasClass('black') && emptyBoxes && !($boxes.eq(index + 1).hasClass('yellow'))) {
  //     $(e.target).addClass('yellow');
  //     $('body').find($boxes).eq(index + 1).removeClass('black').addClass('yellow');
  //     $(e.target).addClass('yellow');
  //     index += 1;
  //
  //
  //   }
  // });

  //   function fillBoxes(e, classToAdd, classToRemove, boxNumbers) {
  //     let index = $(e.target).index();
  //     const emptyBoxes = (!($(e.target).hasClass(classToRemove)) && !($(e.target).hasClass(classToAdd)));
  //
  //
  // ///// a crazy ass bolean which i think will screw me over eventuall
  //     while ($boxes.eq(index + boxNumbers).hasClass(classToRemove) && emptyBoxes && (($boxes.eq(index + boxNumbers).hasClass(classToAdd)) || ($boxes.eq(index + boxNumbers + boxNumbers).hasClass(classToAdd)) || ($boxes.eq(index + boxNumbers + boxNumbers + boxNumbers).hasClass(classToAdd)) || ($boxes.eq(index + boxNumbers + boxNumbers + boxNumbers + boxNumbers).hasClass(classToAdd)))) {
  //       $(e.target).addClass(classToAdd);
  //       $('body').find($boxes).eq(index + boxNumbers).removeClass(classToRemove).addClass(classToAdd);
  //       $(e.target).addClass(classToAdd);
  //       index += boxNumbers;
  //     }
  //     console.log($boxes.eq(index + boxNumbers));
  //   }


});
