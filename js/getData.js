import componen from "./config.js";
import RequestService from "./service.js";

class getData{

    async getDataUsers(){
        var url = `${componen.USER}`
        let data = await RequestService.getRequest(url)

        return data; 
    }

    async PostDataUsers($data){
        var url = `${componen.USER}`
        let data = await RequestService.postRequest(url, $data)

        return data; 
    }

    async getDataKategory(){
        var url = `${componen.KATEGORY}`
        let data = await RequestService.getRequest(url)

        return data; 
    }
    async getDataArticel(url){
        var url = `${componen.ARTIKEL}?id=${url}`
        let data = await RequestService.getRequest(url)

        return data; 
    }

};

export default new getData()