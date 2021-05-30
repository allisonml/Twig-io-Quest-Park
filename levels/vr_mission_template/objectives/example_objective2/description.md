# How do we use loops?

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Read the lesson</li>
  <li>Understand how many times a given loop runs</li>
  <li>Understand the result of running a loop</li>
  <li>Enter in the necessary integers and/or strings</li>
  <li>Click <em>HACK</em>.</li>
</ul>
</div>

What are for loops? Why are they useful?
- Loops are ways to repeat operations multiple times without having to write repetitive doe!

## Can you hear the bird in that tree? What a beautiful song.
Let's look at this example of a for loop:
```js
for(let i = 0; i < 5; i++) {
    //body
}
```

When you write a for loop you have to state 3 things:
- the initial value of the variable when start loop (in the example, i = 0)
- the condition to continue looping after each loop (i < 5)
- how the variable is incremented/altered at the end of each loop (i++)

It works like this:
1. initialize the variable with the given value
2. if the conditional statement is true, run the loop body
3. increment the variable as stated
4. repeat steps 3 and 4 until the conditional is false

Take a look at this code:
```js
for(let i = 0; i < 3; i++) {
    console.log('Cheep!');
}
```
How many times is 'Cheep!' logged/printed?

## A Friendly Game of Tag
To know:
- the "+" operator is one of the most basic ways to connect, append, or concatenate strings

You and some friends decided to play a game of tag. One of them's talking, but you're too far to hear.

```js
var secretMessage = ''
for(let count = 5; count >=; count--) {
    secretMessage = secretMessage + count + ", ";
}
secretMessage = secretMessage + "ready or not!";
```
What are they saying? (In other words, what is the value of secretMessage?)


CHECK:
- your first response should be an integer
- your second response should be a string, excluding the quotation  marks or apostrophes
Then, click HACK.

