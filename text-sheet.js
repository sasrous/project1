
var trigger = 0;
var finished = false;
var block = true;
var blockUp = true;
var textspeed = 50;
var firstGemFound = false;
var text = {
  string1: "Kids, don't drink and drive…  The spaceship is all wrecked :(              " ,
  string2: "I have an emergency pod but I ran out of power during the emergency landing...           ",
  string3: "Let's take a look around, maybe i can find some source of energy…           ",
  string4: "Those gems over there might do the work.         ",
  string5: "There's too much gravity to JUMP         ",
  string6: "I approach the gem using *LEFT* and *RIGHT* arrow            ",
  string7: "I feel a strange power inside….             ",
  string8: "I got the gem but i can’t reach the second one, I’ll try using the *UP* arrow….     ",
  string9: "Wow this is a cool power! … will be useful to collect gems              ",
  string10: "* * * HELP BOB GET HOME SAFE * * *",
  string11: "I see a weird tile over there… i should try using the *DOWN* arrow on that one…                                      ",
  string10: "* * * HELP BOB GET HOME SAFE * * *",
};

var textArray = [text.string1, text.string2, text.string3, text.string4, text.string5, text.string6, text.string7, text.string8, text.string9, text.string10, this.string11, this.string12]

var stringCount = 0 ;

var displayOnScreen = function (selector, string, i, timing) {   

  if(i === string.length ){
    console.log("hello");
    finished = true;
    stringCount++
    narrator(textArray); // trigger next string
    
  }
  else if (i < string.length) {
    //finished = false
    $(selector).append(string[i++]);
    setTimeout(function () { displayOnScreen(selector, string, i, timing); }, timing);
  }


}

function narrator(textArray){
  
 
  if (stringCount === 0 && finished === true ){ 
    finished = false
    $("#text1").empty(); //empty screen
    displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
  
  }

  else if (stringCount === 1 && finished === true ){ 
    finished = false
    $("#text1").empty();
    displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
  }

  else if (stringCount === 2 && finished === true ){ 
    finished = false
    $("#text1").empty();
    displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
  }

  else if (stringCount === 3 && finished === true ){ 
    finished = false
    $("#text1").empty();
    displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
  }
  
  else if (stringCount === 4 && finished === true ){ 
    finished = false
    $("#text1").empty();   
    displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
  }
   else if (stringCount === 5 && finished === true ){ 
     finished = false
     $("#text1").empty();
     displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
     setTimeout(function() {
        block = false; // unlock movement
      }, 4000);
     
   }
   else if (stringCount === 6 && finished === true && firstGemFound){ 
    finished = false
    $("#text1").empty();
    displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
   }
   else if (stringCount === 7 && finished === true && firstGemFound){ 
    finished = false
    $("#text1").empty();
    displayOnScreen("#text1", textArray[stringCount], 0, textspeed);
    setTimeout(function() {
      blockUp = false; //unlock up key
    }, 3000);
      
   }
    else if (stringCount === 9 && finished === true ){ 
     finished = false
     $("#text1").empty();   
     displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
   }
   if (stringCount === 11 && finished === true ){ 
    finished = false
    $("#text1").empty();   
    displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
  }


}


// $(function () {
//   setTimeout(function() {
//     displayOnScreen("#text1", textArray[stringCount], 0, 100);   

//   }.bind(this), 7000);
  

// });



// var stringCount = 0 ;
// var displayOnScreen = [];
// var stringArray = [];


// stringArray = textArray[stringCount].split("")

// console.log(stringArray);



// stringArray.forEach(function(element) {
  
//   displayOnScreen.push(element)
//   console.log(displayOnScreen);
//   console.log("hello")
// });
