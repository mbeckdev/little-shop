# little-shop

[Check it out here!](https://mbeckdev.github.io/little-shop/)

![image](https://user-images.githubusercontent.com/4518809/149596445-fb5b2563-2e2a-4d0d-8a89-27f47e9a726d.png)

A front end of a shop using React Hooks, react-router-dom, and CSS Modules.

There is a list of items, and when you add them to the cart, the cart updates with that item and has addintion and subtraction buttons, and a place to type in the amount you want. When you add things to the cart the subtotal updates.

![mini-jungle2](https://user-images.githubusercontent.com/4518809/149596682-d20f19eb-1580-4a46-9955-b612e7c75eea.jpg)

There is a Home page and a Shop page, and pages for each of the items. The cart shows up when there is something in the cart.

![mini-jungle3](https://user-images.githubusercontent.com/4518809/149596837-e27e3d11-ba68-4467-81ca-b3d24d19fc34.jpg)

## Why

This is made mainly to practice the shopping cart and react-router-dom. Adding and subtracting items,
deleting times, choosing which component to keep the state in.

### Some Fun Dependencies Used

- uniqid -- it creates a unique identifier
  - (You should always use a unique key when mapping items in JSX)
- react-router-dom
  - helps you make it look like there are actual pages in a website when really it's just
    a single page app (SPA). You can route components to different url paths.
- fortawesome -- free icons from fontawesome
  - the shopping cart icon is from there

### An exercise from The Odin Project

I made this as an exercise for the Odin Project.

They're directions are like: make a shopping cart, it should have this functionality in it. Also use react-router-dom. Go!

[Shopping Cart Project Guidelines](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/shopping-cart)

I added extra functionality by making a page for each item.
Kind of like this:

```
 <Route
    path="/little-shop/shop/:itemId"
    element={
      <Item />
    }
  />
```

## What I learned

how to use that tricky /:variable part of react-router-dom so that you don't have to create 8 different individual pages or components, just one page that takes the variable.

You can pass variables in the react-router-dom `<Link />` component!

## Programming Tidbits

Ok, I wonder if there's a better way for this, but my navbar is 5vh (5% of the vertical height of the screen) and the Home.js is 95vh, which together make up 100% of the vertical screen, which looks fine I suppose. Another method I've done in other projects is to make the Home.js screen 100vh and then make the navbar some height, but lay it on top of the Home.js screen using "postion: absolute" but then part of the picture of the Home.js is eclipsed/it can't be seen.

CSS Modules makes it difficult to use id's. Using classes instead is fine. A few people told me that's what they do when they use CSS Modules.

I made a component just for a buttons. I wanted to use styling of a button for the 'Shop Now' button on the home screen but it's actually a link, so I made some logic in the Button.js component so it works.

`function Button({ buttonType, text, onTheClick, isLink = false }) {`

I made isLink false by default so I didn't have to mess with the other times I called Button on actual buttons.

## Design Descisions

Where should I put the state?

First I had it in the Shop.js component, that encompassed the item list and the side cart which was all I needed. Then I switched to the home page and back to the shop and all the data was gone. So I put the data up a level into the App.js component which included the Home and the Shop page, so now the data is saved between those.

I started off making a few states but realized they might need to depend on each other so I settled one one large state called cart. it includes an item array and a few variables that help out in different places.

## Future Improvements

Things to add if I feel like it later:

- Funny descriptions for items on each item page.
- Something more than an alert when you click the Checkout button.
- Put the state into localStorage and pull it back out when you come back to the site so that your cart data gets saved.
