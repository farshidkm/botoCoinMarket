import { useEffect, useState } from "react";
import { serviceApi } from "../services/serviceApi";
import styles from "./Home.module.css"

let backupData=[];

function Home(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        console.log("Home Mounted");
        serviceApi.GET(
            "/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        ).then((result)=>{
            if(result.status === 200){
                console.log(result.data)
                setData(result.data);
                backupData=[...result.data];
            }
        });

    },[]);

    function handleSearch(e){
        let newData = [];
        console.log(e.target.value);
        newData = backupData.filter((d)=>{
            if(d.name.toUpperCase().includes(e.target.value.toUpperCase())) return true;
        })
        setData(newData);
    }

    return(
        <>
            <input className={styles.search} onChange={handleSearch}></input>
            <table className={styles.mainTable}>
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Acroname</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Market CAP</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d)=>{return(
                        <tr key = {d.id}>
                            <td><img src={d.image}></img></td>
                            <td>{d.name}</td>
                            <td>{d.symbol}</td>
                            <td>{d.current_price}</td>
                            <td>{d.price_change_percentage_24h}</td>
                            <td>{d.market_cap}</td>
                        </tr>
                        )})}
                </tbody>
            </table>
        </>
    )
}

export default Home;