import axios from "axios";
const baseUrl = "https://api.coingecko.com/api/v3/coins";

const GET = async(path, body={})=>{
    try{
          const result = await axios.get(baseUrl+path, body);
    return{
        data: result.data,
        status: result.status,
    }  
    }
    catch(error){
        console.log(error);
    }

}

export const serviceApi = {
    GET,
}