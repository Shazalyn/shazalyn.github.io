// start with the first card-opening[0]
// click on awe~some or groovy--it doesnt matter which button selected in the mvp version, either send you to the next card via some nifty js/jquery action
//   js goes into a random generator[for.each?] that picks a card to display from the array of possibilities
//     changes that are made:
//         update the product picture on the right in the product div/column
//         update the budget[#money] amount .text()
//         update the button captions for #button1 and #button2
//         update the caption in the #caption_background
//     repeat this for 4-5 times
//   after 4-5 tries, then go to the game over, and bounce the $000 money button


//   **set up array with product pictures, button choices, caption changes, and budget changes

// *after mvp is met add more cards, or math functions to the money
"use strict";

$(document).ready(function($) {
  console.log('Script Loaded!')
// declare buttons as a variable---get ready to make an event listener
  let $btnAction = $('#button1, #button2');

  var cardInfo = [];
  cardInfo.push({cardName:'start', cardImg:'images/bestieBus.png', button1:'awe~some', button2:'groovy', budgetAmt:1200});
  cardInfo.push({cardName:'game_over',cardImg:'images/clone.png',button1:"unreal",
  button2:"awkward", budgetAmt: 0});
  cardInfo.push({cardName:'breakdown',cardImg:'images/pinkBus.png',button1:"bummer",
    button2:"what-evahs",budgetAmt: 600});
  cardInfo.push({cardName:'hair',cardImg:'images/mermaidHair.png',button1:"fantastic!",
    button2: "not a priority",budgetAmt: 900});
  cardInfo.push({cardName:'molly',cardImg:'images/pills.png',button1:
    "impaired",button2:"cured",budgetAmt: 400});
  // ['shorts','images/jeans.png',"jean shorts","cut-off mom jeans", 300],
  // ['floral','images/floral.png',"sweet", "incredible", 800]



let cardChance = Math.floor(Math.random() * ((cardInfo.length-1)-1)) + 1;






// click on awe~some or groovy--it doesnt matter which button selected in the mvp version, either send you to the next card via some nifty js/jquery action
var changeCards = function(){
// on click event to button
  $btnAction.click(function(event){
      console.log("Clicked!")
      console.log(event)

      if(event.target.id === 'button1'){
        event.target.innerText = ("yeah"+ cardInfo.button1);
      }

    cardInfo.forEach(function(value, index) {
      console.log(value.button1);
    });

  })
// ??start throu gh the array of objects, then populate the html with the corrolating info


}
changeCards();
//   js goes into a random generator[for.each?] that picks a card to display from the array of possibilities
//this is the document.ready close below
});




