import {useState, useEffect} from 'react'; 

function usePersistentState() {
    const [text, setText] = useState(localStorage.getItem("text") || "");

    useEffect(() => {
      localStorage.setItem("text", text);
    }, [text]);
  
    function handleChange(e) {
      setText(e.target.value);
    }
}

export default usePersistentState; 