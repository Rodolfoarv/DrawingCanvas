# Drawing Canvas

This project was done just for fun :)

I wanted to try some React concepts and to have a repository anyone could reference that highlights the most common concepts in React such as:

- Creation of components
- Typescript
- Store
- Migration from a class component to a functional component
- UI construction
- Unit testing
- End to end testing
- Hooks

Feel free to use the project as you like and to switch to any PR to see the development of any particular feature, if there is any question feel free to hit me up.

# Live demo

https://cranky-mayer-3e66e6.netlify.app/

# Demo

![Evenito](/public/demo.gif)

## Objective:

Create a console application where users are able to do the following:

1. create a new canvas;
2. draw on the canvas by issuing various commands;
3. quit.

## Command specifications

- N w h Create a new canvas of width w and height h.
  L x1 y1 x2 y2 Create a new line from (x1,y1) to (x2,y2). Currently
  only horizontal or vertical lines are supported. Horizontal and
  vertical lines will be drawn using the selected colour.
- R x1 y1 x2 y2 Create a new rectangle, whose upper left corner is
  (x1,y1) and lower right corner is (x2,y2). Horizontal and vertical
  lines will be drawn using the selected colour.
- B x y Fill the entire area connected to (x,y) with
  selected colour. The behaviour of this is the same as that of the
  "bucket fill" tool in paint programs.
- C c Set the selected colour to “c”. The default colour
  is “x”.
- Q Quit the program.
- Log Feature: Users are able to see their command log history
- Undo Feature: Users are able to undo the last command.

# Tech stack

- "react": "^16.13.1",
- Typescript: Used for better type checks and cleaner code read
- Global state: In order to share the state of the application between the components
- JEST for **testing** and ensuring the **quality** of the code
- Cypress.io for E2E tests

# Pull requests

Since this a personal project I needed extra help to develop it! In this case someone special was in charge of reviewing my PRs so I did not mess anything up :)

## Who reviewed my PR's ?

My friend's dog was in charge with the mission of reviewing my PRs in exchange for food.

![Doggo](/public/doggo.jpg)

# How to execute in your local machine?

```
git clone https://github.com/Rodolfoarv/DrawingCanvas.git
cd DrawingCanvas
yarn install
yarn start
```

Open http://localhost:3000 in your browser

# How to run Tests?

React Testing Library was used for Unit Testing. Cypress.io was used for E2E tests.

Execute the following command to run tests:

```
yarn test
```

# Sample I/O

## Command: N 20 4

![1](/public/1.png)

## Command: L 1 2 6 2

![Doggo](/public/2.png)

## Command: L 6 3 6 4

![Doggo](/public/3.png)

## Command: R 16 1 20 3

![Doggo](/public/4.png)

## Command: C O

## Command: B 10 3

![Doggo](/public/5.png)

# Thank you
