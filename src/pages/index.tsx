import { useState } from "react";
import AppHead from "../components/AppHead";
import Footer from "../components/Footer";
import MemoContainer from "../components/Memo/MemoContainer";
import MemoHead from "../components/Memo/MemoHead";
import MemoItem from "../components/Memo/MemoItem";
import QuoteContainer from "../components/Quote/QuoteContainer";
import QuoteHead from "../components/Quote/QuoteHead";
import QuoteItem from "../components/Quote/QuoteItem";
import TodoContainer from "../components/Todo/TodoContainer";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoHead from "../components/Todo/TodoHead";
import TodoList from "../components/Todo/TodoList";

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
