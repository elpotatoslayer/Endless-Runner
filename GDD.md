# Codder Runner

## Concept

- Endless runner game where you control a box that is running and avoiding obstacles

## Game play

The first scene is meant to collect your username, by which the scores are updated on the server. After you enter your username and click on the "Play game" button, the game will start.

At the start of the game, the box is moving and the player needs to control the box and dodge all the obstacles. You will be able to jump by pressing SPACE or LEFT MOUSE KEY to avoid being pushed back by the obstacles. You will be able to press the SPACE or LEFT MOUSE KEY to jump twice as high in order to avoid the obstacles.

After you collide with an obstacle, you will be taken to the leaderboard scene, which shows the top 10 players ranked according to their scores. You can press the "r" key to restart the game.

## The project objectives
Since the phaser library was new to me, my initial plan was to read the documentation as thoroughly as I could on Day 1. As I read the docs, I came to know that there has been a significant change from v2 to v3 in the phaser library. I had to make a decision and decided to implement the game on v3.

There were a few obstacles that I came through at first. For example, phaser 3 dropped support for "input" elements and the only way to add them was by utilizing the HTML elements that we already know and love.

My first day was spent on making the decisions and the second day were spent implementing the decisions that I made.

The second day was a smooth ride with the exception of a few bugs. One of the bugs that I encountered was that, whenever I started the game with 0 points, the server would throw an error. I couldn't find a way to solve this as my initial guess would be that the API endpoint server does not accept falsy values, and in some programming languages, 0 is considered as a falsy value. So I decided to start the game with 1 point.

The second bug that I encountered was restarting the scene (Phaser calls them scenes). It wasn't pleasant at all because I couldn't find any documentation regarding that, and all the methods and examples that they provided did not work for me.

I guess this is part of programming.

## Elements

- Obstacles: Little platforms with the word `ERROR` on them flying towards the character to push him away
> Sprite:
![screenshot](./src/assets/Piso.png)

- Ground: The ground the character is running on
> Image:
![screenshot](./src/assets/ground.png)

- Background: A scrolling background with buildings
> Image:
![screenshot](./src/assets/background(2).png)