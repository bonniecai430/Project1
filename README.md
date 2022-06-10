# Concentration
Concentration is a card game where all of the cards are shuffled and are laid face down on a surface in orderly rows and columns.All of the cards have a mate.

After you press the PLAY button, player have 25 seconds to match all the cards.

Each turn, two cards are flipped over.  If the cards do not match, they are both turned back face down.  If the cards match,they will turn pink.

When palyer match all the cards in 25 seconds they will see the win message.Otherwise,they will see the lose message.

# Screenshot
<img width="1440" alt="Screen Shot " src="https://user-images.githubusercontent.com/105684279/172925276-9fa816cb-390b-40b7-b999-f1671fa569d9.png">

# Technologies Used
JavaScript,HTML,CSS

# Getting Started
(https://bonniecai430.github.io/Project1/)

# Next Steps
1.When the user matched all the pictures.The timer should be pop up the win message immediately.

2.Use the css with more efficient layout to make the game looks more professional.

3.Try to make a random borad. Player can keep playing.

4.Set up a play again button. No matter user win or lose they can click the borad unless they press the play again button.

5.Add some background music and animation to make the game more fun.

```
Concentration Game Pseudocode :
1) Define required constants

2) Define required variables used to track the state of the game
2.1)Use the variable firstSelect and secondSelect to store the player choices
2.2)Use the variable turn to make sure player only have 2 choices

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
3.1)Store 16 elements to represent each card on the page
3.2)Store play button to start the game and start countdown

4) Upon loading the app should:
	4.1) Initialize the state variables
    4.1.1)Initialize turn equal to 0 or 1 to to store the player's last two choices
    4.1.2)Initialize two variable firstSelect and secondSelect to empty string to store the clicked cards's attribute
4.2.2)
	4.2) Render those values to the page
    4.2.1)Loop over each 16 elements that represent the cards on the page, and for each iteration
    4.2.2)If player matched all the picture in 25s, render a win message
    4.2.3)Otherwise,render a lose message
	4.3) Wait for the user to click a board

5) Handle a player clicking a board
Loop over each 16 elements.When you click each element add the class name"clicked" for them(then you can see the picture of the card).Also ues the turn equal to 0 and 1 to make sure only have two choices and store their attributes in variable firstSelect and SecondSelect.After that,check firstSelect and secondSelect are they same or not?

If they are same, add the class name "checked" for them and turn the cards to pink color(the you know you have matched them already).And then remove their "clicked" class name. Make sure you can keep going.If they are not the same, then  add the class name "wrong".Then we use a setTimeOut function to make the wrong cards turn it back and then keep playing.


```

```
Wireframe:
(https://www.figma.com/file/ypSqA794jfT0QmrdV5sXcJ/Untitled?node-id=0%3A1)

```