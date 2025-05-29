import {useState, useEffect} from "react";

const useFetch = ({request, initialData})=> {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const { data, error } = await request();
        setLoading(false);
        if (error) {
          return setError(error.response.data.message);
        }
        setData(data);
      };
  
      fetchData();
    }, [request]);

    return {
        data,
        loading,
        error,
        setData,
        setLoading,
        setError,
    }
}

export default useFetch;