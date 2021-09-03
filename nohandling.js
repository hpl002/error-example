const axios = require('axios');
let config = {
    method: 'get',
    url: 'https://someinvalidaddressyeyo',
    headers: { }
  };

(async ()=>{
     //here we are not handling anything and error is thrown out direcly
    const response = await axios(config)
    
})() 


(async ()=>{
    //here we are catching error, checking what type it is and then adding additional information that makes it a bit easier to consume
    try {
        const response = await axios(config)        
    } catch (error) {
        console.log(error)
    }
   
})() 