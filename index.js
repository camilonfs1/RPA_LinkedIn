const AcccessModule = require("./Modules/access");
require('dotenv').config()


const puppeteer = require('puppeteer');  
(async () => {
  try {

    //Define browser properties
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 20,
      defaultViewport: {
        width: 1200,
        height: 768,
      },
    });

    //Create a new page in browser
    const page = await browser.newPage();

    //Login process
    var tabs = await  AcccessModule.login(page,"camilo","123456");

    //Write hellow world

  } catch (error) {
    console.error(error);
  }
})();