# To-do list application ☁️

## Overview

This is a simple, browser-based to-do list web page that allows a user to add, complete and delet tasks. Tasks are saved in the browser using localStorage so that they persist across page refreshes. 

---

## Features
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Tasks retain their state after page refresh
- Interactive UI

---

## Technologies used
- HTML
- CSS
- JavaScript
- localStorage API

---

# Challenges

The main challenge for this project was understanding the relationship between stored data and the user interface, and how those work with localStorage. I needed to learn how to keep the tasks array in sync with the DOM, while also making sure that the changes were correctly saved and retrieved from localStorage.

Another challenge was managing how user interactions such as adding, completing and deleting tasks, update both the underlying data and the UI simultaneously. Making sure that these layers were consistent was really important in preventing issues such as the UI becoming out of sync with the stored data due to data not persisting after a page refresh. 

---

## What I learned

A big thing I learned through this project was how to structure a simple state driven application, and how to use JSON methods (stringify and parse) to store and retrieve structured data in a browser. 

I also gained a much better understanding of how to manipulate the DOM dynamically based on user interactions to create, update and remove elements, rather than relying on static HTML. This really helped me to understand how user interfaces can be driven by underlying data. 

Overall, this project felt like a big step up for me and helped me to understand the relationship between application state, the DOM, and persistent storage and how they all work together to create an interactive user experiences. 

---

## Future improvements I'd like to implement
In the future I'd love to add the following features:
- Add task priorities (urgent/ medium/ low)
- Add due dates using a calendar input (really excited to work on this edition)
- Add task editing functionality
- Add drag and drop reordering

---

## How to run the project
1.  Clone the repository:
2.  Open the project folder
3.  Open the index.html in your browser by: -Double clicking or -Right click -> 'Open with' -> your browser
4.  The application will load in your browser -> Happy planning!


---

## Screenshot of the application


---

## Live demo
https://rheasaragravestock.github.io/todolist/ 
