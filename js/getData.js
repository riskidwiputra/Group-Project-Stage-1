import componen from "./config.js";
import RequestService from "./service.js";

class getData{

    async getDataUsers(){
        var url = `${componen}`
        let data = await RequestService.getRequest(url)

        return data; 
    }

};

export default new getData()