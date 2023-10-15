import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { useParams } from "react-router-dom";



export default function ShowAllMonsters() {

    const [searchResults, setSearchResults] = useState([]);

    const {api} = useContext(ApiContext);

    const {monsterName} = useParams();

    useEffect(() => {
        console.log("Fetching data for your monster now!");

		function apiRequest(){
			let queryParams = new URLSearchParams(api+"/"+queryParams)
        
        console.log(response);

        let responseData = response.json();

        setSearchResults(responseData.data);
        }

        apiRequest();

    }, [monsterName]);

    return (
		<div>
			<h1>Monster Search</h1>
        </div>
    )
    

}