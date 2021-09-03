const axios = require('axios');
const { FlowError } = require("./flowStatusError")


let config = {
    method: 'get',
    url: 'https://someinvalidaddressyeyo',
    headers: {}
};


(async () => {
    //here we are catching error, checking what type it is and then adding additional information that makes it a bit easier to consume
    try {
        await axios(config)
    } catch (error) {
        const customErr = new FlowError({ message: "failed while trying to handle callback", rawError: { ...error } })
        throw customErr
    }
})()