$(() => {


  const $boxes = $('.box');




  function fillBoxes(e, classToAdd, classToRemove, boxNumbers) {
    let index = $(e.target).index();
    const emptyBoxes = (!($(e.target).hasClass(classToRemove)) && !($(e.target).hasClass(classToAdd)));

    while ($boxes.eq(index + boxNumbers).hasClass(classToRemove) && emptyBoxes && ($boxes.eq(index + boxNumbers).hasClass(classToAdd))) {
      $(e.target).addClass(classToAdd);
      $('body').find($boxes).eq(index + boxNumbers).removeClass(classToRemove).addClass(classToAdd);
      $(e.target).addClass(classToAdd);
      index += boxNumbers;
    }
  }

  // $boxes.on('click', alternateMatches);
  $('.box').each(function(i) {  //////// adds numbers to each box
    $(this).text(i);
  });

  $boxes.on('click', (e) => {
    fillBoxes(e, 'yellow', 'black', +8);
    fillBoxes(e, 'black', 'yellow', +8);
  });


});
