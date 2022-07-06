import { useEffect} from 'react';

function useEvent () {
 useEffect(() =>
   window.addEventListener(
     "keydown",
     (event) => {
       console.log("Keydown");
     },
     []
   )
 );
    
}

export default useEvent;
