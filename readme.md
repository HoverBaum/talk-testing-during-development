# Testing webapps

## The why and how

In this talk we explore some experiences on how a high level of automation in testing can benefit the development workflow and look at how to use Cypress to automate end-to-end tests of websites.

You can check out the hosted version of the slides at: [testing-webapps.talks.hoverbaum.net](https://testing-webapps.talks.hoverbaum.net/)

## This deck

This deck is based on [mdx-deck](https://github.com/jxnblk/mdx-deck) and you can find the slides in top level `.mdx` files. They are united into a single presentation through `index.js`.

Around that we use custom themes and a couple of components.

This project provides a few commands:

```bash
# Run presentation locally
npm start

# Create standalone HTML version
npm run build

# Generate a PDF version
npm run export
```

For exporting the presentation to PDF we use [slides-to-pdf](https://github.com/HoverBaum/slides-to-pdf).

## Demo site

In `demo-site` you can find a simple website that illustrates all the implementation details for Cypress mentioned in the slides.

To run the site locally and open Cypress to test it, simply run:

```bash
cd demo-site
npm i
npm start

# In a second shell in the demo-site folder
npm test
```

## Resources

This deck is build using [mdx-deck](https://github.com/jxnblk/mdx-deck).

Animation on opening slide done using [react-particles-js](https://github.com/Wufe/react-particles-js), visit their [demo site](https://rpj.bembi.org/#bubbles) to create something similar.
