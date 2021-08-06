const Functions = require ("./functions")

async function login(page, username, password) {
    try {
        await page.goto(
          "https://www.linkedin.com",
          { waitUntil: "load" }
        );
      } catch (err) {
        await page.close();        
        return {
          page: "",
          popup: "",
          status: {
            message: "Error al carga la pagina de linkedin",
          },
        };
      }

        //Registro login y password
  try {
    await page.waitForSelector('#session_key');
    await page.type('#session_key', username);
    await page.type('#session_password', password);
    await page.click(`[type="submit"]`);

    await Functions.sleep(100);
    
  } catch (err) {
    await page.close();        
        return {
          page: "",
          popup: "",
          status: {
            message: "Error al carga la pagina de linkedin",
          },
        };
  }
  // get popop window
  try {
    
    await Functions.sleep(1000);
    await page.waitForXPath(
      '/html/body/div[5]/header/div/div/div/div[1]/input',
      {waitUntil: "load"}
    );
    const [post] = await page.$x('/html/body/div[5]/header/div/div/div/div[1]/input');
    await post.click({clickCount: 1, delay: 100});

    await post.type("ADL digital lab");

    await post.click({clickCount: 1, delay: 100});
    await Functions.sleep(1000);
    await page.keyboard.press('Enter');
    
    
    
  }catch(err){
    await page.close();        
    return {
      page: "",
      popup: "",
      status: {
        message: "Error al carga la pagina de linkedin",
      },
    };
  }
  
  try {
    await page.goto(
      "https://www.linkedin.com/company/adldigitallab/mycompany/",
      { waitUntil: "load" }
    );
    await Functions.sleep(6000);
    console.log("EXELENTE...");
    return page;
  } catch (err) {
    await page.close();        
        return {
          page: "",
          popup: "",
          status: {
            message: "Error al carga la pagina de linkedin",
          },
        };
  }

}

module.exports = {
    login: login
};
  