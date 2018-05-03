import axios from 'axios';

const baseurl = 'http://localhost:5000';
// Note: for Every Async function returns a promise that have to be resolve with an Await Function
export default class urlservices {
    static async getService(uri, method, data = {}){
        const mainUrl = `${baseurl}${uri}`;
        const token = localStorage.getItem('token');
        const config = {};

        if(token){config.headers = {Authorization: token}}

        switch(method){
            case 'POST':
                return await axios.post(mainUrl,data,config)
            case 'GET':
                return await axios.get(mainUrl,config)
            case 'PUT':
                return await axios.put(mainUrl,data,config)
            case 'DELETE' :
                return await axios.delete(mainUrl,config)
            default:
                break;
        }
    }
}