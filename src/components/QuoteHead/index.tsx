import React, { useState } from "react";
import QuoteDropdown from "../QuoteDropdown";

const QuoteHead = ({ chosenQuote, setChosenQuote }: {
    chosenQuote: string[];
    setChosenQuote: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <>
      <div className="flex justify-between pt-24 px-12 pb-25 border-b-1 border-gray-300">
        <h1 className="m-0 text-2xl font-bold leading-8 text-green-600 tracking-wide mb-16">
          Quote of the day
        </h1>
        <QuoteDropdown
          chosenQuote={chosenQuote}
          setChosenQuote={setChosenQuote}
        />
        <button className="rounded-md bg-green-600 text-white font-bold py-2 px-4">
          Get a quote
        </button>
      </div>
    </>
  );
};

export default QuoteHead;
