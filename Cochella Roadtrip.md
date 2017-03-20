Cochella Roadtrip

You and your BFF are going to the ultimate boho-girl music festival "Cochella".
Recently your grandfather gave you his mint 70's VW camper bus. Talk about the 
ultimate accessory for the hotest weekend! The quest for accquiring the most 
inspirational outfit and experience, takes place over the course of a day. 
Stay with-in budget, and get through the first exciting day in style. 

WIN: finish with $$$ in your pocket, at the end of the first day 
//limit the cards to between 10-15
LOSE: run out of cash, or
      see someone in your EXACT outfit (gasp!)

******************************************************************
MoSCoW:

  *Must have-Minimum Usable Subset
    .choice of 2 buttons    
        clever, funny, relevant words
    .great images of products or supporting images of card story
    .visuals of Cochella in the Indio valley
    .some obsticles to overcome ie bus breakdown , accidently dropping molly
    .5 to 7 cards per play cycle
    .a win or lose finale based either $$ or the outfit seen on someone else
    .move the money button when the game is over

  *Should have
    .experience beyond shopping
        --spin class
        --coffee
        --VW breakdown

  *Could have
    .choices add or subtract from the $$budget score
    .budget $ shake or jump on update
    .change the btn text color to black on clicking
    *sub-stories on a couple of cards
    *8-12 cards per play cycle
    *high score counter

  *Won't have, but would like in the future
    *animation of windmills or the ferris wheel
**********************************************************************
wireframe and create copy in the xd file
  I personally found the Xd tool to be invaluable. It allowed me to create the visuals and many accompaying  parts and pieces quite easily.

  Intital I optimized too big. It was easy to redo one of the wireframes, and then adjust the necessary items quickly and easily.

***********************************************************************
creating the CSS and HTML from the wireframe was a challenge for me. 
  The CSS was like alligator wrestling. Taj, the TA, set me up on bootstrap, which helped me considerably. I was then able to get my items in the browser, looking just like my beautiful wireframes!!!!! It dawned on me this is what I will be doing as a developer---taking the designers layout, and making it happen.

************************************************************************
JS and jQuery. I needed considerable help with writing the code. I had a screen share with a tutor to help me translate my psuedo code to js and jQuery.
************************************************************************
The following friends gave me input on content, code, research, design, and all around feedback:
rob, irene, arin, annee, richard, keith, dave, chelsea, alec.......

Also shout outs go out to my spoonbill co-cohorts, and the GA teaching staff, all who helped me tremendously.

************************************************************************

Psuedo code-

  **set up array with product pictures, button choices, caption changes, and budget changes
start with the first card-opening[0]
click on awe~some or groovy--it doesnt matter which button selected in the mvp version, either send you to the next card via some nifty js/jquery action
  js goes into a random generator that picks a card to display from the array of possibilities 
    changes that are made:  
        update the product picture on the right in the product div/column
        update the budget[#money] amount .text()
        update the button captions for #button1 and #button2
        update the caption in the #caption_background
    repeat this for 4-5 times
  after 4-5 tries, then go to the game over possibilities, and modify  the budget and buttons.

Can I make something appear, or disappear? and what would that be

