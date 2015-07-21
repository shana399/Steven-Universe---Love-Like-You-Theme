$(document).ready(function(){
  /*
  var heightInitial = $('.test').height();
  console.log(heightInitial);
*/

  $('.test').height('1px');
  console.log($('.test').height());


  var testEnter = function(){
    /* Fading in the box,
     * animating the expanding header container
    */
    console.log('Enter');
    $('.test').fadeIn(250);
    $('.test').animate({height: '100%'}, 250);
  };

  var testExit = function(){
    /* Fading out to transparent,
     * then to disappear.
    */
    console.log('Exit');
    $('.test').animate({height: '1px'}, 1000);
    $('.test').fadeOut(250);
  };




  /* Showing / hiding the corresponding
   * boxes into the .test area
  */

  $('.test1').click(function(){
    testEnter();
    $('.testing1').animate({width: '100%', top: '0px'}, 1500);
  });


  $('.close').click(function(){
    $('.testing1').animate({width: '1px', top: '-=250px'}, 750);
    testExit();
  });

});
