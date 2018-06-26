

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
      $( "#skipbtn" ).toggleClass( "hidden" );
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
  $( "#skipbtn" ).click(function() {
    
    block = false;
    blockUp = false;
    stringCount = 9;
    function stopAllTimeouts(){
      var id = window.setTimeout(null,0);
     while (id--) {
        window.clearTimeout(id);
      }
    }
    stopAllTimeouts();
    $("#text1").empty()
    finished = true;
    narrator(textArray);
    $( "#skipbtn" ).toggleClass( "hidden" );
    $( "#skipbtn" ).toggleClass( "hidden" );
    
  });
}

Intro.prototype.start = function() {
  this._assignControls();
};