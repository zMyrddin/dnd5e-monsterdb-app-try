import { createContext, useState } from "react";

export const ApiContext = createContext(null);

export default function ApiProvider ({children}){
    const [apiUrl, setApiUrl] = useState('https://www.dnd5eapi.co');

	return (
		<ApiContext.Provider value={
			{
				api: apiUrl, 
				setApi: setApiUrl
			}
		}>

			{children}

		</ApiContext.Provider>
	)
}