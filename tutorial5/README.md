## React Tutorial 5
- Events
- Conditionals
- Lists
- Forms
- Router
- Memo
- CSS Styling
- Sass Styling


## Events

Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML: click, change, mouseover etc. sample event in react : <button onClick={shoot}>Take the Shot!</button>

## Class Conditionals

We can use the if JavaScript operator to decide which component to render. example code u can see : functions/Madecondition.js

## Lists

In React, you will render lists with some type of loop.The JavaScript map() array method is generally the preferred method. example code u can see : functions/Lists.js

## Forms

Handling forms is about how you handle the data when it changes value or gets submitted.
In HTML, form data is usually handled by the DOM.
In React, form data is usually handled by the components.
When the data is handled by the components, all the data is stored in the component state.
You can control changes by adding event handlers in the onChange attribute.
We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
For exemple form u can see : functions/Forms.js Multiforms.js Selected.js Textarea.js

## Router

React route is feature for create route in URL path, for example : https://react/pathroot, this important for SEO.
before use route, install : nnpm i -D react-router-dom@latest
for example code : pages/Blog.js Contact.js Home.js Layout.js and App.js

## Memo

Using memo will cause React to skip rendering a component if its props have not changed. example code : funcitons/Memo.js

## CSS Styling

There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

- Inline styling
- CSS stylesheets
- CSS Modules

## Sass Styling

Sass is a CSS pre-processor.
Sass files are executed on the server and sends CSS to the browser.

# Exercise

make a library feature with a borrow book menu and a book borrower view !