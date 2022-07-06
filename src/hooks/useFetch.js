import { useEffect, useState } from "react";

function useFetch (url) {
      const [data, setData] = useState("");
      const [error, setError] = useState(null);
      const [id, setId] = useState("");

      useEffect(() => { 
        
        fetch(`${url}${id}`, {
          headers: { Accept: "application/json" },
        })
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => setError(err));
      }, [id]);

      return {
        data, error, id, setId
      }
    }

    export default useFetch;

