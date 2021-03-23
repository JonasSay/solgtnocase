# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Explaining the functionality

The webpage visually displays what stage the customer is currently at in their real estate sales process. It is possible
to loop through all the customers by clicking the buttons. At the bottom of the customer view it is clearly displayed the
customers next step, which seemed to be an important factor when developing this webpage. There's also customer information
displayed in the main section of the customer view.

#### Task duration: 2 hours

I would have loved to use bootstrap and make it prettier as it is currently a complete eyesore, but I guess
it was part of the task to only spend 2 hours on it. I would like to specify that I'm no design guru, however
it wouldve been way better if we were allowed to use dependencies for design.

## Explanation of the task

This webpage is developed according to the specifications from Solgt.no. The requirements were:

Background:

The process of selling a house can be confusing, especially if the seller is inexperienced or has never heard of the ibuying model. Our experience is that most customers are not intimately familiar with the process, and in order to help guide our customers, we want to provide a visual indicator of where in the process the customer currently is, and what their next action would be.


A sale follows these steps:

1. Waiting for offer

2. Offer created

3. Offer accepted

4. Waiting for final offer

5. Final offer created

6. Waiting for takeover

7. Completed


Each step may or may not have one or more attached actions the customer needs to do in order to progress to the next step.


The task:

We want you to

- Create one (or more, depending on how you want to organise your code) react component which should:

    - Show the customer where in the process they are by displaying

        - The current step they are at

        - What the next action would be

- Add the component to an empty react app so we can view it

- Add functionality to loop through each customer

- Upload the code to git

- Create a short documentation explaining the functionality


You have been provided with a JSON file containing a number of customers at different stages of the process, and we would like to be able to flip through these different customers, displaying one at a time.


Limitations:

- We want you to use as few extra react components as possible, focusing on writing your own code and not using dependencies

- You can use whatever you want for the html/CSS