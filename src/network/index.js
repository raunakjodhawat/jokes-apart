const axios = require('axios');
export async function makeNetworkRequest(method, url){
    return axios({
        method,
        url,
    }).then((response)=>{
        if(response.status === 200){
            return {
                status: response.status,
                message: response.data
            };
        }
        return {
            status: response.status,
            message: "ERROR, Status is not 200"
        };
    }).catch((error)=>{
        return {
            status: 500,
            message: `Error in making axios request, ${error}`
        };
    })
}