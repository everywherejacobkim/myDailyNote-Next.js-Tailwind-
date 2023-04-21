import { useState } from "react";
import AppHead from "../components/AppHead";
import Footer from "../components/Footer";
import MemoContainer from "../components/MemoContainer";
import MemoHead from "../components/MemoHead";
import MemoItem from "../components/MemoItem";
import QuoteContainer from "../components/QuoteContainer";
import QuoteHead from "../components/QuoteHead";
import QuoteItem from "../components/QuoteItem";
import TodoContainer from "../components/TodoContainer";
import TodoCreate from "../components/TodoCreate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";

const App = () => {
  const [chosenQuote, setChosenQuote] = useState<string[]>(["life"]);
  const [memo, setMemo] = useState<string[]>([]);
  return (
    <div className="App">
      <AppHead />
      <div className="flex flex-row w-4/5 mx-auto">
        <TodoContainer>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoContainer>
        <div className="flex flex-col">
          <MemoContainer>
            <MemoHead memo={memo} setMemo={setMemo} />
            <MemoItem />
          </MemoContainer>
          <QuoteContainer>
            <QuoteHead
              chosenQuote={chosenQuote}
              setChosenQuote={setChosenQuote}
            />
            <QuoteItem chosenQuote={chosenQuote} />
          </QuoteContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
