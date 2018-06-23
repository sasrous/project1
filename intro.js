

function Intro (options) {
}



Intro.prototype._assignControls = function(){
  $( "#startbtn" ).click(function() {
   //intro.start();
    $( ".hidethis" ).toggleClass( "intro-screen" );
    $( ".hidethis" ).toggleClass( "hidden" );
    $( "#bob-intro" ).toggleClass( "hidden" );
    $( "#bob-intro" ).toggleClass( "intro-screen" );
    //$( ".main" ).toggleClass( "hidden" );  
    setTimeout(function() {
      $( "#bob-intro" ).toggleClass( "intro-screen" );
      $( "#bob-intro" ).toggleClass( "hidden" );
      $( ".main" ).toggleClass( "hidden" );
    }.bind(this), 9000);
    // text start 
    $(function () {
      setTimeout(function() {
        displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
        stringCount++
        if (finished) {
          
          
        narrator(textArray);
        }
      }, 9500);
      
    
    });
  });
}

Intro.prototype.start = function() {
  this._assignControls();
};