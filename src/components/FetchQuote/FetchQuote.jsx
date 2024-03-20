import React from 'react';
import './FetchQuote.css';
import UseFetch from '../../CustomHook/UseFetch';

const FetchQuote = () => {
    // const [quote, setQuote] = useState([]);
    
    // const quoteHandler = async () => {
    //     const url = "http://api.quotable.io/random";
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     setQuote(data);
    //     console.log(data);
    // }
    
    // useEffect(() => {
    //     quoteHandler();
    // }, [])
    
    const {quote, author, fetchNewQuote} = UseFetch("http://api.quotable.io/random");
    
    return ( 
        <div id='fetchQuote'>
            <div id='fetch'>
                <h2 className='head'>Quote of the Day</h2>
                <div className='quotePart'>
                    <p className='content'>{quote}</p>
                    <span className='author'>....{author}</span>
                </div>
                <div className='qbtn'>
                    <button id='quotebtn' onClick={fetchNewQuote}>Refresh</button>
                </div>    
            </div>
        </div> 
    );
}
 
export default FetchQuote;