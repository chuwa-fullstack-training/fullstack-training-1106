import React, {useState, useEffect} from "react";

const Quotable = () => {
    const [quote, setQuote] = useState({});
    
    // useEffect(() => {
    //     fetch("https://api.quotable.io/random")
    //     .then((response) => response.json())
    //     .then((data) => setQuote(data));
    // }, []);
    const fetchQuote = () => {
        fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => setQuote(data));
    }
    
    return (
        <div>
        <h1>Random Quote</h1>
        <button onClick={fetchQuote}>Get Quote</button>
    {quote && (
        <div>
        <h2>{quote.content}</h2>
        <p>{quote.author}</p>
        </div>
        )}      
        </div>
    );
    }

    export default Quotable;