# How to create RPA with NodeJS and Puppeteer
## RPA (Robotic Process Automation)

This is a technology that pretends to automate process using a robot. They aren’t robots like those that are part of the Tesla assembly chain or robot vacuum cleaner, this robots are small software pieces.

## NodeJS:

Devised as an asynchronous event-driven JavaScript runtime environment, Node.js is designed to build scalable network applications. It was created with the focus of being useful in creating highly scalable network programs, such as web servers. It was created by Ryan Dahl in 2009 and its evolution is sponsored by the Joyent company, which also has Dahl on staff.

## Scraping web:

## Puppeteer:

## Code instructions

1. Call puppeteer library:
```javascript
const puppeteer = require('puppeteer'); 
```

2. Because Nodejs is a async runtime enviroment we need create one asycn function:
```javascript
(async () => { 


}
```
3. Declare browser calling puppeteer library
```javascript
//define browser
const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
        width: 1200,
        height: 768,
    },
});

//create new page
const page = await browser.newPage();
```
4. 


## Conclusion

## Source:
The code is public on : [GitHub Repository](https://github.com/camilonfs1/RPA_LinkedIn.git)

## Bio
> What is NodeJs? -Online at:  https://nodejs.org/es/about/ 
>
> Born NodeJs - Online at:   https://es.wikipedia.org/wiki/Node.js