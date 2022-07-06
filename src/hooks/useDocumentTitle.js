import { useState, useEffect } from 'react';

function useDocumentTitle (title) {
    // const [documentTitle, setDocumentTitle] = useState('Basic Counter'); 
    // useEffect(() => {
    //     document.title = documentTitle; 
    //   },[documentTitle]);
    // return {
    //     documentTitle, 

    document.title=title
        
    }


export default useDocumentTitle;

