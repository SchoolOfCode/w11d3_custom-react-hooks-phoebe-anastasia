import { useState, useEffect } from 'react';

function useDocumentTitle (title) {
    const [documentTitle, setDocumentTitle] = useState('Basic Counter'); 
    useEffect(() => {
        document.title = documentTitle; 
      },[documentTitle]);
    return {
        documentTitle, 
        setDocumentTitle
    }
}

export default useDocumentTitle;

