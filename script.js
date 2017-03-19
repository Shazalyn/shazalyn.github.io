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

  var cardArray = [];
  cardArray.push({cardName:'start', cardImg:'images/bestieBus.png', button1:'awe~some', button2:'groovy', budgetAmt:1200});

  cardArray.push({cardName:'game_over',cardImg:'images/clone.png',button1:"unreal", button2:"awkward", budgetAmt: 0, caption: "i am the caption for clone"});

  cardArray.push({cardName:'breakdown',cardImg:'images/pinkBus.png',button1:"bummer",button2:"what-evahs",budgetAmt: 600, caption: "i am the caption for breakdown"});

  cardArray.push({cardName:'hair',cardImg:'images/mermaidHair.png',button1:"fantastic!",button2: "not a priority",budgetAmt: 900, caption: "i am the caption for hair"});

  cardArray.push({cardName:'molly',cardImg:'images/pills.png',button1:
    "impaired",button2:"cured",budgetAmt: 400, caption: "i am the caption for molly"});
  // ['shorts','images/jeans.png',"jean shorts","cut-off mom jeans", 300, caption: "i am the caption for shorts"],
  // ['floral','images/floral.png',"sweet", "incredible", 800, caption: "i am the caption for floral"]


// let randCardIdx = Math.floor(Math.random() * ((cardArray.length)-1)) + 1;
let randCardIdx = Math.floor(Math.random() * ((cardArray.length)-2)) + 2;

// click on awe~some or groovy--it doesnt matter which button selected in the mvp version, either send you to the next card via some nifty js/jquery action
var changeCards = function(){
// on click event to button
  $btnAction.click(function(event){
      // console.log("Clicked!");
      console.log(randCardIdx);
        console.log(cardArray[randCardIdx]);

var card = cardArray[randCardIdx];
    var newCaption = card.caption;

      console.log(newCaption);
    var captionDiv = $('#caption_background');
      console.log(captionDiv);
    captionDiv.text(newCaption);

    var button1Text =card.button1;
      console.log("button1 tEXT: ", button1Text);
        // var button1 = $('#button1');
        // button1.text(button1Text);
        $('#button1').text(button1Text);

    var button2Text =card.button2;
      console.log("button2 tEXT: ", button2Text);
        var button2 = $('#button2');
        button2.text(button2Text);

    var budgetText = card.budgetAmt;
      console.log("money amount: ", budgetText);
      $('#money').text("$ " + budgetText);


    var imgSrc = card.cardImg;
      var productImg = $('#product_img');
      productImg.attr("src", imgSrc);


    // cardArray.forEach(function(value, index) {
    //   console.log(value.button1);
    // });

  })
// ??start throu gh the array of objects, then populate the html with the corrolating info


}
changeCards();
//   js goes into a random generator[for.each?] that picks a card to display from the array of possibilities
//this is the document.ready close below
});




