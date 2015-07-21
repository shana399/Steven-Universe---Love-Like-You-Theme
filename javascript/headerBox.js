$(document).ready(function(){
  $('.test').height('1px');

  var testEnter = function(){
    /* Fading in the box,
    ** animating the expanding header container */

    $('.test').fadeIn(250);
    $('.test').animate({height: '100%'}, 250);
  };

  var testExit = function(){
    /* Fading out to transparent,
    ** then to disappear */

    $('.test').animate({height: '1px'}, 1000);
    $('.test').fadeOut(250);
  };

  /* Showing / hiding the corresponding
  ** boxes into the '.test' area */
  $('.test1').click(function(){
    testEnter();
    $('.testing1').animate({height: '100%', width: '100%', top: '0px'}, 1500);
  });
  $('.test2').click(function(){
    testEnter();
    $('.testing2').animate({height: '100%', width: '100%', top: '0px'}, 1500);
  });
  
  /*Close ALL the boxes.*/
  $('.close').click(function(){
    $('.testing1').animate({height: '1px', width: '1px', top: '-=250px'}, 750);
    $('.testing2').animate({height: '1px', width: '1px', top: '-=250px'}, 750);
    testExit();
  });
});
