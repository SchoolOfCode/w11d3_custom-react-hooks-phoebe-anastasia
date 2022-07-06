import { useEffect, useState } from "react";

function useFetch (url) {
      const [data, setData] = useState("");
      const [error, setError] = useState(null);

      useEffect(() => { 
          // if (error) {
        //   return <p>Error!</p>;
        // }
        
        fetch(url, {
          headers: { Accept: "application/json" },
        })
          .then((res) => res.json())
          .then(({ data }) => setData(data))
          .catch((err) => setError(err));
      }, [url]);

     


      return {
        data, error
      }
    }

    export default useFetch;

