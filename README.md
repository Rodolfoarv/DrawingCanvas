# Evenito Demo

This project is part of the challenge for Evenito's Coding problem

# Live demo

# Demo

![Evenito](/public/evenitoDemo.gif)

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

## Extra features developed outside from Coding Challenge :)

- Log Feature: Users are able to see their command log history
- Undo Feature: Users are able to undo the last command.

# Tech stack

- "react": "^16.13.1",
- Typescript: Used for better type checks and cleaner code read
- Global state: In order to share the state of the application between the components
- JEST for **testing** and ensuring the **quality** of the code
- Cypress.io for E2E tests

## Why did I decide using React?

Eventhough this could have been done in Python :) which I take as my favorite programming language, I decided to use React so users could have a better UI / UX experience

# Pull requests

Every "small feature" was developed in a separated pull request with the commits associated to it. This is a common practice I follow, afterwards someone reviews my PR or do a Pair Programming exercise to ensure the quality and coding standards of the feature being developed.

## Who reviewed my PR's ?

My friend's dog was in charge with the mission of reviewing my PRs in exchange for food.

![Doggo](/public/doggo.jpg)

# How to execute in your local machine?

```
git clone https://github.com/Rodolfoarv/Evenito.git
cd Evenito
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
