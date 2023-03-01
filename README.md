# Etch-a-Sketch

This project was mostly about manipulating the DOM through Javascript.
Utilizing flexboxes, a grid of divs was created. A button titled reset deletes
all of the divs, prompts the user for a number, and generates a new grid of divs
based on that number. Example, the user enters 15. The new grid will be 15 x 15 divs.

What I learned:
-I learned a few ways to manipulate classes in Javascript. I wasn't fully aware the 
class list was just a string before.
-I was able to practice utilzing listeners. It was fun to utilize the observer pattern.
-I became more aware of how hoisting worked in JS. I messed around with different ways to create functions
and attach them to the listeners. The method I chose was mostly for readability of code. 
-I learned a lot about utilzing flexbox. Specifically, I started to understand the three portions of the flex property. 

What I should work on:
-Deleting all of the Divs when the reset button is pressed takes O(2n). It really shouldn't. The issue came up
from deleting the elements while looping through them. However, there has to be 
-I should try to implement this with CSS Grids instead. Although Flexbox did well with this, you would think
CSS Grids is better at grids. It does get a little confusing how cascading rules will work when you have a flex container 
containing a bunch of other containers all with different flex-directions. Perhaps CSS Grids would do this better?
-I could style it a little better. Or make other options. Make it work with the keyboard to make it feel like a real 
etch-a-sketch? A lot of options for improvement.
