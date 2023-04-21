import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillChatRightQuoteFill } from "react-icons/bs";

const QuoteItem = ({ chosenQuote }: {
    chosenQuote: string[];
}) => {
  const [quote, setQuote] = useState([]);
  useEffect(
    function loadQuote() {
      axios
        .get(`https://quotable.io/quotes?tags=${chosenQuote}`)
        .then((result) => {
          setQuote(
            result.data.results[`${Math.floor(Math.random() * 10)}`].content
          );
        })
        .catch((err) => console.log(err));
    },
    [chosenQuote]
  );
  return (
    <div className="px-5 py-20 tracking-wider">
      <h4 className="flex items-center">
        <BsFillChatRightQuoteFill className="text-green-600 text-4xl mr-4 mb-6 transform -translate-y-10" />
        {quote}{" "}
      </h4>
    </div>
  );
};

export default QuoteItem;




