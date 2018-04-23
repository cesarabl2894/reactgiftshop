import axios from 'axios';

const baseurl = 'http://localhost:5000/';

export default class urlservices {
    static async getService(uri, method, data = {}){
        const mainUrl = `${baseurl}${uri}`;
        const token = localStorage.getItem('token');
        const config = {};

        if(token){config.headers = {Authorization: token}}

        switch(method){
            case 'POST':
                return axios.post(mainUrl,data,config)
            case 'GET':
                return axios.get(mainUrl,data,config)
            case 'PUT':
                return axios.put(mainUrl,data,config)
            case 'DELETE' :
                return axios.put(mainUrl,data,config)
            default:
                break;
        }
    }
}