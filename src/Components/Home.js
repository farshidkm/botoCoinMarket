import { useEffect, useState } from "react";
import { serviceApi } from "../services/serviceApi";

function Home(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        console.log("Home Mounted");
        serviceApi.GET(
            "/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        ).then((result)=>{console.log(result)});

    },[]);

    return(
        <>
            home
        </>
    )
}

export default Home;