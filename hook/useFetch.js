import { useState, useEffect } from "react";
import axios from "axios";

// import {RAPID_API_KEY} from '@env'

// const rapidApiKey =  RAPID_API_KEY;

const useFetch = (endpoint, query) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'c12d0e783emsh414787bcfc8882fp199da3jsnb8ae0a5d6ac8',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          ...query
        },
      };

      const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error );
            alert('There is an error!')
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(()=>{
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return {data, isLoading, error, refetch}; 
}

export default useFetch;