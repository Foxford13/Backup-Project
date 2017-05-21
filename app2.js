$(() => {


  const $boxes = $('.box');





  $(() => {
    // $boxes.on('click', alternateMatches);
    $('.box').each(function(i) {  //////// adds numbers to each box
      $(this).text(i);
    });

    $boxes.on('click', (e) => {
      let index = $(e.target).index();
      //
      index += 1;
      //
      // var hasBlack = $(e.target).hasClass('black');
      // var hasYellow = $(e.target).hasClass('yellow');
      //
      // console.log(hasBlack);
      // console.log(index);

      console.log(index);


      console.log(document.querySelectorAll('.black'));


    });
  });
});
