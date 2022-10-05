import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL:'https://api.shrtco.de/v2/'
});

export const shortenUrl = async(url) =>{
    try{
   return  await axiosInstance.get(`shorten?url=${url}`).then(result=>{
        console.log(result)
       if(result.data.ok){
        return result.data.result.short_link
       }else{
        return result.data.error
       }

    })}catch(e){
        return "Something went wrong"
    }
}