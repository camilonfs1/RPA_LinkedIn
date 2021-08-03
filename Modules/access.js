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
    await page.waitForNavigation();

    console.log("lo logramos");
    
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
    console.log("llega")
    const popup = await new Promise((resolve, reject) => {
      var rej = false;
      var mr = setTimeout(() => {
        rej = true;
        reject(null);
      }, 5000);
      page.once("popup", (data) => {
        clearTimeout(mr);
        if (rej === false) {
          resolve(data);
        }
      });
    });
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

}

module.exports = {
    login: login
};
  