import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    
    const fetchNewQuote = async() => {
        const res = await fetch(url);
        const data = await res.json();
        setQuote(data.content);
        setAuthor(data.author);
    }
    
    useEffect(() => {
        fetchNewQuote();
    }, [url]);

    return {quote, author, fetchNewQuote};
};
 
export default UseFetch;