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

  cardArray.push({cardName:'game_over',cardImg:'images/clone.png',button1:"YOU", button2:"LOSE !!!", budgetAmt: " " + 0 + " you lose", caption: "You are rockin’ the on trend red 80’s crop T you scored from the swap meet at the Rose Bowl, paired with the  ultimate hip hugger denim shorts. OMG-your male dopplegänger just strolled by in EXACTLY the same outfit :|"});

  cardArray.push({cardName:'bestest_outfit',cardImg:'images/bestOutfit.png',button1:"YOU", button2:"WIN !!!", budgetAmt: 2100, caption: "Congrats!!!!! You made it throught the first day of Cochella in a great outfit, with no drama, no outfit twins & $$$ left over."});

  cardArray.push({cardName:'breakdown',cardImg:'images/pinkBus.png',button1:"bummer",button2:"what-evahs",budgetAmt: 600, caption: "The Bus overheats just outside of Palm Springs. Spend 50% of your budget on car repairs. (WTF is an air-cooled engine, anyways?)"});

  cardArray.push({cardName:'hair',cardImg:'images/mermaidHair.png',button1:"fantastic!",button2: "not a priority",budgetAmt: 900, caption: "Your long-time hair stylist has a last minute cancellation & offers extensions at co$t. MERMAID HAIR here I come !!!"});

  cardArray.push({cardName:'molly',cardImg:'images/pills.png',button1:"impaired",button2:"cured",budgetAmt: 400, caption: "You have a bit of a headache from the kick-off party at the Tiki bar last night. Grab an aspirin from the Besties purse. OOPS — That wasn’t aspirin! "});

cardArray.push({cardName:'shorts', cardImg:'images/jeans.png', button1: "jean shorts", button2: "cut-off mom jeans",budgetAmt: 300, caption: "Choices, choices, choices. Irony or the tried and true, blue standard?"});

  cardArray.push({cardName: 'floral', cardImg: 'images/floral.png', button1: "sweet", button2:  "incredible", budgetAmt: 800, caption: "Pics of your girl-squad trend all over Instagram and Snapchat wearing your DIY Floral Headbands as the 'must-wear' item. Your Etsy shop blows up, selling out your stock. More $$ for coffee and spin class."});


// let randCardIdx = Math.floor(Math.random() * ((cardArray.length)-2)) + 2;--this needs to be inside the change cards function, and will excluded start and finish cards

// click on awe~some or groovy--it doesnt matter which button selected in the mvp version, either send you to the next card via some nifty js/jquery action
var changeCards = function(){
// on click event to button
var counter = 0;
  $btnAction.click(function(event){
      // console.log("Clicked!");

let randCardIdx = Math.floor(Math.random() * ((cardArray.length)-3)) + 3;
  counter++;
      console.log(randCardIdx);
        console.log(cardArray[randCardIdx]);

// choice of game-over cards
  if(counter === 5){
//pick card index 1 0r 2 for game end
 var gameEnd = Math.floor((Math.random() * 2) + 1);
    var card = cardArray[gameEnd];
          if(gameEnd === 1){
      // LOSE
            $('button').fadeOut(8000);
          } else {
      // WIN
            $("#button_holder").animate({
            right: '300px',
            top: '33px',
            opacity: '1',
            height: '150px',
            width: '150px'
            });
          $('button').fadeOut(10000);
      }
    $btnAction.off();
    // OLD FADE OUTON CLICK
    // $(".btn1").click(function(){
    //     $('button').fadeOut(10000);
    // });
    // add setTimeout here??? and nicer looking you lost.....
    // alert("you Lost :(");
  } else {
    var card = cardArray[randCardIdx];
  }

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
      $('#money').text("budget left $ " + budgetText);


    var imgSrc = card.cardImg;
      var productImg = $('#product_img');
      productImg.attr("src", imgSrc);
//remove the card after it has been used---no repeats
cardArray.splice(randCardIdx,1);
  })
// ??start throu gh the array of objects, then populate the html with the corrolating info


}
changeCards();
//   js goes into a random generator[for.each?] that picks a card to display from the array of possibilities
//this is the document.ready close below
});




