Cochella Roadtrip

You and your BFF are going to the ultimate boho-girl music festival "Cochella".
Recently your grandfather gave you his mint 70's VW camper bus. Talk about the 
ultimate accessory for the hotest weekend! The quest for accquiring the most 
inspirational outfit and experience, takes place over the course of a day. 
Stay with-in budget, and get through the first exciting day in style. 

WIN: finish with $$$ in your pocket 
//limit the cards to between 10-15
LOSE: run out of cash, or
      see someone in your EXACT outfit (gasp!)

******************************************************************
MoSCoW:

  *Must have-Minimum Usable Subset
    .great images of products or supporting images of card story
    .choice of 2 buttons    
        clever, funny, relevant words
    .choices add or subtract from the $$budget score
    .visuals of Cochella in the Indio valley
    .some obsticles to overcome ie bus breakdown , accidently dropping molly
    .5 to 7 cards per play cycle
    .change the btn text color to black on clicking
    .budget $ shake or jump on update
    .a win or lose finale based either $$ or the outfit seen on someone else

  *Should have
    .experience beyond shopping
        --spin class
        --coffee
        --VW breakdown

  *Could have
    *sub-stories on a couple of cards
    *8-12 cards per play cycle
    *high score counter

  *Won't have, but would like in the future
    *animation of windmills or the ferris wheel
**********************************************************************

Psuedo code-

start with the first card-opening
click on awe~some or groovy--it doesnt matter which button selected in the mvp version, either send you to the next card via some nifty js/jquery action
  js goes into a random generator[for.each?] that picks a card to display from the array of possibilities 
    changes that are made:  
        update the product picture on the right in the product div/column
        update the budget[#money] amount .text()
        update the button captions for #button1 and #button2
        update the caption in the #caption_background
    repeat this for 4-5 times
  after 4-5 tries, then go to the #clone div

